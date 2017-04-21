var dataArray = [5, 11, 18];

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
