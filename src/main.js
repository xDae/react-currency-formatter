// import React from 'react';
import PropTypes from 'prop-types';

import locales from './locales';
import defaultLocales from './default-locales';
import symbols from './symbols';

const ReactCurrencyFormatter = props => {
  const getFormatter = options => {
    let locale, currency, symbol, pattern, decimal, group;

    // Helper Functions
    const isUndefined = o => typeof o === 'undefined';

    const toFixed = (n, precision) => (+(Math.round(+(n + 'e' + precision)) + 'e' + -precision)).toFixed(precision);

    // Perform checks on inputs and set up defaults as needed (defaults to en, USD)
    if(isUndefined(options)) { options = {}; }

    currency = isUndefined(options.currency)? 'USD' : options.currency.toUpperCase();
    locale = isUndefined(options.locale) ? locales[defaultLocales[currency]] : locales[options.locale];

    if (!isUndefined(locale.h)) locale = locales[locale.h]; // Locale inheritance

    symbol = isUndefined(options.symbol) ? symbols[currency] : options.symbol;

    if (isUndefined(symbol)) symbol = currency; // In case we don't have the symbol, just use the ccy code

    pattern = isUndefined(options.pattern) ? locale.p : options.pattern;
    decimal = isUndefined(options.decimal) ? locale.d : options.decimal;
    group = isUndefined(options.group) ? locale.g : options.group;

    //console.log(locale);

    // encodePattern Function - returns a few simple characteristics of the pattern provided
    const encodePattern = pattern => {
      let decimalPlaces = 0;
      let frontPadding = '';
      let backPadding = '';
      let groupLengths = [];

      //console.log(pattern);

      let patternStarted = false;
      let decimalsStarted = false;
      let patternEnded = false;

      let currentGroupLength = 0;
      let zeroLength = 0;

      for(var i = 0; i < pattern.length; ++i ) {
        var c = pattern[i];

        if(!patternStarted && ['#','0',',','.'].indexOf(c) > -1) {
          patternStarted = true;
        }

        if(!patternStarted) { frontPadding += c; }

        switch (c) {
          case '#':
            ++currentGroupLength;
            break;

          case '0':
            if(decimalsStarted) {  ++decimalPlaces; }
            else { ++currentGroupLength; ++zeroLength; }
            break;

          case ',':
            groupLengths.push(currentGroupLength);
            currentGroupLength = 0;
            break;

          case '.':
            groupLengths.push(currentGroupLength);
            decimalsStarted = true;
            break;
        }

        if(patternStarted && !(['#','0',',','.'].indexOf(c) > -1)) {
          patternEnded = true;

          if(!decimalsStarted) {
            groupLengths.push(currentGroupLength);
          }
        }

        if(patternEnded) { backPadding += c; }
      }

      const encodedPattern = {
        decimalPlaces,
        frontPadding,
        backPadding,
        groupLengths,
        zeroLength
      };

      return encodedPattern;
    };

    // Zero Padding helper function
    var pad = (n, width) => {
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
    }

    // Format function
    const format = (n, f) => {
      var formattedNumber = toFixed(Math.abs(n), f.decimalPlaces);

      var splitNumber = formattedNumber.split(".");

      // i.e. we actually have some sort of grouping in the values
      if(f.groupLengths.length > 1) {
        var segment = "";
        var cursor = splitNumber[0].length;
        var groupIndex = f.groupLengths.length - 1;

        while(cursor > 0) {
          if(groupIndex <= 0) { groupIndex = 1; } // Always reset to the first group length if the number is big

          var currentGroupLength = f.groupLengths[groupIndex];

          var start = cursor-currentGroupLength;

          segment = splitNumber[0].substring(start, cursor) + f.group + segment;

          cursor -= currentGroupLength;

          --groupIndex;
        }

        segment = segment.substring(0, segment.length-1);
        //console.log(segment);
      }

      if(segment.length < f.zeroLength) { segment = pad(segment, f.zeroLength); }

      var formattedNumber = f.frontPadding + segment + ( isUndefined(splitNumber[1]) ? '' : (f.decimal + splitNumber[1]) ) + f.backPadding;

      return formattedNumber.replace('!', symbol);
    };

    // Use encode function to work out pattern
    var patternArray = pattern.split(";");
    var positiveFormat = encodePattern(patternArray[0]);

    positiveFormat.symbol = symbol;
    positiveFormat.decimal = decimal;
    positiveFormat.group = group;

    var negativeFormat = isUndefined(patternArray[1]) ? encodePattern("-" + patternArray[0]) : encodePattern(patternArray[1]);

    negativeFormat.symbol = symbol;
    negativeFormat.decimal = decimal;
    negativeFormat.group = group;

    var zero = isUndefined(patternArray[2]) ? format(0, positiveFormat) : patternArray[2];

    if(!isUndefined(patternArray[2])) { zeroFormat = patternArray[2]; }

    return n => {
      let formattedNumber;
      n = Number(n);
      if(n > 0) { formattedNumber = format(n, positiveFormat); }
      else if(n == 0) { formattedNumber = zero.replace('!', symbol); }
      else { formattedNumber = format(n, negativeFormat);	}
      return formattedNumber;
    };
  };

  const format = (number, options) => {
    const formatterFunction = getFormatter(options);

    return formatterFunction(number);
  }

  const {
    quantity,
    currency,
    symbol,
    locale,
    decimal,
    group,
    pattern
  } = props;

  return (format(quantity, {
    currency,
    symbol,
    locale,
    decimal,
    group,
    pattern
  }));
};

ReactCurrencyFormatter.defaultProps = {
  currency: 'USD'
};

ReactCurrencyFormatter.propTypes = {
  quantity: PropTypes.number.isRequired,
  currency: PropTypes.string,
  symbol: PropTypes.string,
  locale: PropTypes.string,
  decimal: PropTypes.string,
  group: PropTypes.string,
  pattern: PropTypes.string
};

export default ReactCurrencyFormatter;
