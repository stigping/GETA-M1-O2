function selectBar(id)
{
    if(selected == true && selectedId == id)
    {
        return deselect();
    }
    selected = true;
    chosenBar = id;
    selectedId = id;
    show();
    return chosenBar;
}

function deselect()
{
    selected = false;
    chosenBar = 'none';
    selectedId = null;
    show();
    return chosenBar;
}

function deleteBar()
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

function changeValue()
{
    if(chosenBar == 'none')
    {
        return;
    }

    if(inputValue == null || parseInt(inputValue) < 1 || parseInt(inputValue) > 10)
    {
        errMsg = 'You have entered an invalid number';
    }
    let indexChange = parseInt(chosenBar - 1);
    numbers.splice(indexChange, 1, inputValue);
    deselect();
    show();
}
function addNumber()
{
    let indexChange = parseInt(chosenBar - 1);
    numbers.splice(indexChange, 1, inputValue);
    deselect();
    show();
}