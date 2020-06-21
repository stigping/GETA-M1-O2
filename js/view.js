show(); // Creates the default view as soon as the website opens

function show() // Creates the default view
{
    let disabled = selectedId == 'none' ? 'disabled' : '';
    let  = selectedId == 'none' ? 'none' : 'selectedId';
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++)
    {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    contentDiv.innerHTML = `
        <svg id="chart" width="500" viewBox="0 0 80 60">
            ${svgInnerHtml}
        </svg><br/>
        Selected bar: <i>${selectedId}</i>
        <br/>
        Enter a value between 1 and 10:<br/>
        Value:
        <input type="number" min="1" max="10" oninput="inputValue = this.value"/>
        <button onclick="addBar()">Add bar</button><br/>
        <div>${errMsg}</div>
        <br/>
        <button ${disabled} onclick="changeBar()">Change the selected bar</button><br/><br/>
        <button ${disabled} onclick="deleteBar(inputValue)">Remove selected bar</button><br/><br/>
        <button onclick="reset()">Reset</button>
        `;
}

function createBar(number, barNo) // Creates bars
{
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 5.8;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    let selectable = selectedId == barNo == true ? 'selected' : '';
    return `<rect width="${width}" height="${height}"
            x="${x}" y="${y}" fill="${color}"
            onclick='selectBar(this.id)' id='${barNo}' class='${selectable}'>
            </rect>`;
}

function calcColor(min, max, val) // Gives bars colors
{
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}