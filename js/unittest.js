QUnit.test("Selects a bar and gets ID, then deselects", function (assert)
{
	reset();
	selectBar("1");
    assert.deepEqual(selectedId, "1", "Selected bar 1");

    selectBar("1");
	assert.deepEqual(selectedId, "none", "Deselected bar 1");
});