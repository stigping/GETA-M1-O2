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
    let index = numbers.indexOf(parseInt(chosenBar));
    if(index > -1)
    {
        numbers.splice(index, 1)
    }
    show();
}