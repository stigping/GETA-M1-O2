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
}

function deselect()
{
    selected = false;
    chosenBar = 'none';
    selectedId = null;
    inputValue = null;
    show();
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

function changeBar()
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
function addBar()
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

function reset()
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