function selectBar(id) // Make bars able to be selected and deselected
{
    selectedId = selectedId == id ? 'none' : id;
    show();
}

function deleteBar() // Make bars able to be removed
{
    let indexDel = parseInt(selectedId) - 1;
    numbers.splice(indexDel, 1);
    selectedId = 'none';
    show();
}

function changeBar() // Make bars able to be changed
{
    if(selectedId == 'none')
    {
        return;
    }

    if(inputValue == null || parseInt(inputValue) < 1 || parseInt(inputValue) > 10)
    {
        errMsg = 'You have entered an invalid number';
        show();
        return;
    }
    errMsg = '';
    let indexChange = parseInt(selectedId) - 1;
    numbers.splice(indexChange, 1, parseInt(inputValue));
    inputValue = null;
    show();
}

function addBar() // Make bars able to be added
{
    if(inputValue == null || parseInt(inputValue) < 1 || parseInt(inputValue) > 10)
    {
        errMsg = 'You have entered an invalid number';
        inputValue = null;
        show();
        return;
    }
    errMsg = '';
    numbers.push(parseInt(inputValue));
    inputValue = null;
    show();
}

function reset() // Reset everything to default
{
    numbers = [7, 3, 1, 5, 8];
    inputValue = null;
    errMsg = '';
    selectedId = 'none';
    show();
}