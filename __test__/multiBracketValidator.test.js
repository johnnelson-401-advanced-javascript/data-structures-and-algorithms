const bracketValidator = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('Tests bracketValidator returns a boolean representing if the brackets are balanced', () => {
  it('Should return True in these cases', () => {
    let str = '{}';
    expect(bracketValidator(str)).toBe(true);
    let str2 = '{}(){}';
    expect(bracketValidator(str2)).toBe(true);
    let str3 = '()[[Extra Characters]]';
    expect(bracketValidator(str3)).toBe(true);
    let str4 = '(){}[[]]';
    expect(bracketValidator(str4)).toBe(true);
    let str5 = '{}{Code}[Fellows](())';
    expect(bracketValidator(str5)).toBe(true);
  });
  it('Should return FALSE in these cases', () => {
    let str = '{';
    expect(bracketValidator(str)).toBe(false);
    let str2 = ')';
    expect(bracketValidator(str2)).toBe(false);
    let str3 = '[}';
    expect(bracketValidator(str3)).toBe(false);
    
  });

});