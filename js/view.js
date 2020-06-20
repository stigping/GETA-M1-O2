show();

function show()
{
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++)
    {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    contentDiv.innerHTML = `
        <svg id="chart" width="500" viewBox="0 0 80 60">
            ${svgInnerHtml}
        </svg><br/>
        Selected bar: <i>${chosenBar}</i>
        <br/>
        Value:
        <input type="number" min="1" max="10" oninput="inputValue = this.value"/>
        <button>Add bar</button>
        <button disabled>Change the selected bar</button><br/>
        <button disabled>Remove selected bar</button>
        `;
}

function createBar(number, barNo)
{
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect width="${width}" height="${height}"
            x="${x}" y="${y}" fill="${color}"
            onclick='selectBar(this.id)' id='${barNo}'>
            </rect>`;
}

function calcColor(min, max, val)
{
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}