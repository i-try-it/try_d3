var dataArray = [15, 25, 85, 42, 7, 15, 42, 92, 6, 34, 51, 14, 2, 7, 65, 22, 17];
var dataYears = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];

var parseDate = d3.timeParse('%Y');
var height = 200;
var width = 500;

var margin = {
    left: 50,
    right: 50,
    top: 40,
    bottom: 0
}

var y = d3.scaleLinear()
            .domain([0, d3.max(dataArray)]) // min and max for the real data
            .range([height, 0]);
var x = d3.scaleTime()
    .domain(d3.extent(dataYears, function(d){ return parseDate(d)}))//extent function return array of min & max
    .range([0, width]);

var yAxis = d3
    .axisLeft(y)// labels come to the left
    .ticks(3)
    .tickPadding(10)
    .tickSize(10);//live only 3 labels(differs from version to version of d3)
var xAxis = d3
    .axisBottom(x);

var area = d3.area()
                .x(function(d, i) {
                    return x(parseDate(dataYears[i]));
                })
                .y0(height)
                .y1(function(d){
                    return y(d);
                });
var svg = d3.select('body').append('svg').attr('height', '100%').attr('width', '100%');
var chartGroup = svg.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

chartGroup.append('path').attr('d', area(dataArray));
chartGroup.append("g")
    .attr("class", "axis y")
    .call(yAxis);
chartGroup.append("g")
    .attr("class", "axis x")
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis);
