var dataArray = [{ x: 5, y: 5 }, { x: 10, y: 15 }, { x: 20, y: 7 }, { x: 30, y: 18 }, { x: 40, y: 10 }];
var interpolateTypes = [d3.curveLinear, d3.curveNatural, d3.curveStep, d3.curveBasis, d3.curveBundle, d3.curveCardinal];

var svg = d3.select('body').append('svg').attr('height', '100%').attr('width', '100%');

for(var ploatItemIndex=0; ploatItemIndex<6; ploatItemIndex++) {
    var line = d3.line()//generator - its generate a path element
        .x(function (d, i) {
            return d.x * 6;
        })
        .y(function (d, i) {
            return d.y * 4;
        })
        .curve(interpolateTypes[ploatItemIndex]);//curveStep
    
    var shiftX = ploatItemIndex * 250;
    var shiftY = 0;

    var chartGroup = svg.append('g')
    .attr('class', 'group' + ploatItemIndex)
        .attr('transform', 'translate(' + shiftX + ', 0)');//rotate, scale
    chartGroup.append('path')
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('d', line(dataArray));
    chartGroup.selectAll('circle.grp' + ploatItemIndex)
        .data(dataArray)
        .enter().append('circle')
        .attr('class', function(d, i) {
            return 'grp' + i;
        })
        .attr('cx', function (d, i) {
            return d.x * 6;
        })
        .attr('cy', function (d, i) {
            return d.y * 4;
        })
        .attr('r', '2');
}


