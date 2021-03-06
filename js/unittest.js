QUnit.test("Selecting and deselecting", function (assert)
{
	reset();
	selectBar("1");
    assert.deepEqual(selectedId, "1", "Selected bar 1");

    selectBar("1");
    assert.deepEqual(selectedId, "none", "Deselected bar 1");
    
    selectBar("1");
	selectBar("4");
	assert.deepEqual(selectedId, "4", "Reselected bar 1, then selected bar 4");
});

QUnit.test("Selects bar 3 and deletes selected bar", function (assert)
{
	reset();
	selectBar("3");
	deleteBar();
	assert.deepEqual(numbers.length, 4, "Deleted bar 3 and checked that array is equal to 4 items");
});

QUnit.test("Selects bar 3 and changes the selected bar", function (assert)
{
	reset();
	selectBar("3");
	inputValue = 6;
	changeBar();
	assert.deepEqual(numbers[2], 6, "Changes value of bar 3 to 6");
});

QUnit.test("Adds a new bar", function (assert)
{
	reset();
	inputValue = 6;
	addBar();
	assert.deepEqual(numbers.length, 6, "Added a new bar with value 6 and checked if array is equal to 6 items");
});