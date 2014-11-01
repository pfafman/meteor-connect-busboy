Tinytest.add('busboy', function (test) {
  var isDefined = false;
  try {
    busboy;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "busboy is not defined");
  test.isTrue(Package.busboy.busboy, "Package busboy is not defined");
});