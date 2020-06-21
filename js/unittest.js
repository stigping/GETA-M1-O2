QUnit.test("Selects a bar and gets ID", function (assert)
{
	reset();
	selectBar("1");
    assert.deepEqual(selectedId, "1", "Selected bar 1");
});