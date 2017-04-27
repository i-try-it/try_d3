var dataArray = [5, 11, 18];
var dataDays = ['Mon', 'Wed', 'Fri'];
var x = d3.scaleOrdinal()
    .domain(dataDays)
    .range([25, 85, 145]);
var xAxis = d3.axisBottom(x);

var svg = d3.select('body').append('svg')
    .attr('height', '100%')
    .attr('width', '100%');

svg.selectAll('rect') //find ? return it : return empty selections
    .data(dataArray)//append data into selections
    .enter().append('rect')
    .attr('height', function(d, i){
        return d*15;
    })
    .attr('width', '50')
    .attr('x', function(d, i) {//5, 0
        return 60*i; 
    })
    .attr('y', function(d, i){
        return 300-(d*15);
    })
    .attr('fill', 'pink');
svg.append('g')
    .attr('class', 'x axis hidden')
    .attr('transform', 'translate(0, 300)')
    .call(xAxis);

var newX = 300;
svg.selectAll('circle.first') //find ? return it : return empty selections
    .data(dataArray)//append data into selections
    .enter().append('circle')
    .attr('class', 'first')
    .attr('cx', function(d, i){
        newX+=(d*3)+(i*20);
        return newX;
    })
    .attr('cy', '100')
    .attr('r', function(d, i) {
        return d*3;
    });
var newX = 600;
svg.selectAll('ellipse') //find ? return it : return empty selections
    .data(dataArray)//append data into selections
    .enter().append('ellipse')
    .attr('class', 'second')
    .attr('cx', function(d, i){
        newX+=(d*3)+(i*20);
        return newX;
    })
    .attr('cy', '100')
    .attr('rx', function(d, i) {
        return d*3;
    })
    .attr('ry', '30');

var newX = 900;
svg.selectAll('line') //find ? return it : return empty selections
    .data(dataArray)//append data into selections
    .enter().append('line')
    .attr('x1', newX)
    .attr('y1', function(d, i) {
        return 80 + i*20;
    })
    .attr('x2', function(d, i) {
        return newX + d*15;
    })
    .attr('y2', function(d, i) {
        return 80 + i*20;
    })
    //.style('stroke', 'green')//override attr! and css
    //.attr('stroke', 'blue')//will be overriden by css
    .attr('stroke-width', '2');
var textArray = ['start', 'middle', 'end']
svg.append('text').selectAll('tspan')
    .data(textArray)
    .enter().append('tspan')
    .attr('x', newX)
    .attr('y', function(d, i) {
        return 150 + 30*i;
    })
    .attr('fill', 'none')
    .attr('stroke', 'blue')
    .attr('stroke-width', '2')
    .attr('text-anchor', 'start')
    .attr('dominant-baseline', 'end')
    .attr('font-size', '30')
    .text(function(d){
        return d;
    });
/*
svg.append('text')
    .attr('x', newX)
    .attr('y', '150')
    .attr('fill', 'none')
    .attr('stroke', 'blue')
    .attr('stroke-width', '2')
    .attr('text-anchor', 'start')
    .attr('dominant-baseline', 'end')
    .attr('font-size', '30')
    .text('start');

svg.append('text')
    .attr('x', newX)
    .attr('y', '180')
    .attr('fill', 'blue')
    .attr('stroke', '1')
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'end')
    .attr('font-size', '30')
    .text('middle');

svg.append('text')
    .attr('x', newX)
    .attr('y', '210')
    .attr('stroke', 'blue')
    .attr('fill', 'none')
    .attr('text-anchor', 'end')
    .attr('dominant-baseline', 'end')
    .attr('font-size', '30')
    .text('end');
svg.append('line')
    .attr('x1', newX)
    .attr('y1', '150')
    .attr('x2', newX)
    .attr('y2', '210')
    */

    