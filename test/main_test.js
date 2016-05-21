/**
 * Created by zhaotong on 16-5-21.
 */
describe('integration',function () {
  var inputs = 910;

  it('should print correct lcd',function () {

    spyOn(console,'log');

    var expectText =
      "._.\n|_|\n..|"+
      "...\n..|\n..|"+
      "._.\n|.|\n|_|";

    printIcd(inputs);

    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});

describe('unit',function () {
  describe('printlcdNumber',function () {
    var inputs = 910;
    var array;
    beforeEach(function () {
      array = createIcdArray();
    });
    it('should print correct Icd',function () {
      spyOn(console,'log');
      printIcdNumber(inputs,array);

      var expectText =
        "._.\n|_|\n..|"+
        "...\n..|\n..|"+
        "._.\n|.|\n|_|";

      expect(console.log).toHaveBeenCalledWith(expectText);
    });
  });
});
