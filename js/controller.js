function selectBar(id) // Make bars able to be selected
{
    if(selected == true && selectedId == id)
    {
        return deselect();
    }
    selected = true;
    chosenBar = id;
    selectedId = id;
    show();
}

function deselect() // Make bars able to be deselected
{
    selected = false;
    chosenBar = 'none';
    selectedId = null;
    inputValue = null;
    show();
}

function deleteBar() // Make bars able to be removed
{
    if(chosenBar == 'none')
    {
        return;
    }
    let indexDel = parseInt(chosenBar - 1);
    numbers.splice(indexDel, 1);
    deselect();
    show();
}

function changeBar() // Make bars able to be changed
{
    if(chosenBar == 'none')
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
    let indexChange = parseInt(chosenBar - 1);
    numbers.splice(indexChange, 1, parseInt(inputValue));
    deselect();
    show();
}

function addBar() // Make bars able to be added
{
    if(inputValue == null || parseInt(inputValue) < 1 || parseInt(inputValue) > 10)
    {
        errMsg = 'You have entered an invalid number';
        show();
        return;
    }
    errMsg = '';
    numbers.push(parseInt(inputValue));
    deselect();
    show();
}

function reset() // Reset everything to default
{
    deselect();
    numbers = [7, 3, 1, 5, 8];
    chosenBar = 'none';
    inputValue = null;
    selected = false;
    selectedId;
    errMsg = '';
    show();
}