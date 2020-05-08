import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-review-charts',
  templateUrl: './review-charts.component.html',
  styleUrls: ['./review-charts.component.scss']
})
export class ReviewChartsComponent implements OnInit {
  reviews: any = []
  ratingArr: Array<number> = [0, 0, 0, 0, 0, 0]
  private width: number;
  private height: number;
  private margin = { top: 20, right: 20, bottom: 150, left: 80 };

  private x: any;
  private y: any;
  private svg: any;
  private g: any;
  constructor(private apiService: ApiServiceService) {

  }

  ngOnInit() {
    this.apiService.getReviewData().subscribe(x => {
      this.reviews = x
      console.log(x)
      for (var i = 0; i < this.reviews.length; i++) {
        this.ratingArr[this.reviews[i].rating]++;
      }
      // this.ratingArr = this.ratingArr.splice(1,5);
      console.log(this.ratingArr)
      this.initSvg();
      this.init_X_Y_Axis();
      this.create_X_Y_Axis();
      this.createBarChart(this.reviews);
    })

  }



  private initSvg() {

    this.svg = d3.select('svg');
    this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
    this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }



  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////


  private init_X_Y_Axis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(.800);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, .099]);
    this.x.domain(this.reviews.map((d) => d.rating));
    this.y.domain([0, d3Array.max(this.ratingArr, (d) => Number(d))]);
  }



  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////


  private create_X_Y_Axis() {

    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x))
      .selectAll("text")
      .attr("y", 0)
      .attr("x", 9)
      .attr("dy", ".35em")
      .attr("transform", "rotate(60)")
      .style("text-anchor", "start");

    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append("text")
      .attr("transform", "rotate(90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Frequency");

    this.svg.append("text")
      .attr("x", this.width / 2 + 80)
      .attr("y", this.height + 85)
      .style("text-anchor", "middle")
      .text("Ratings");

    this.svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 15)
      .attr("x", 0 - (this.height / 2))
      .style("text-anchor", "middle")
      .text("Review Count");

  }



  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////


  private createBarChart(data) {
    //select all bars on the graph, take them out, and exit the previous data set.
    //then you can add/enter the new data set
    var bars = this.g.selectAll(".bar")
      .remove()
      .exit()
      .data(data)

    //now actually give each rectangle the corresponding data
    bars.enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => this.x(d.rating))
      .attr('y', (d) => this.y(this.ratingArr[d.rating]))
      .attr('width', this.x.bandwidth())
      .attr('height', (d) => {
        //console.log(d)
        // console.log(this.height - this.y(this.ratingArr[d.rating]))
        return this.height - this.y(this.ratingArr[d.rating]);
      });
    bars.enter()
      .append("text")
      .attr("class", "bar")
      .attr("text-anchor", "middle")
      .attr('x', (d) => this.x(d.rating)+15)
      .attr('y', (d) => {
        return this.y(this.ratingArr[d.rating]) - 5
      })
      .text((d) => {
        return this.ratingArr[d.rating]
      });

    //   this.svg.selectAll("rect.bar")
    //   .data(data)
    // .enter().append("text")
    //   .attr("class", "bar")
    //   .attr("text-anchor", "middle")
    //   .attr('x', (d) => this.x(d.rating)+this.x.rangeBand()/2)
    //   .attr('y', (d) => this.y(this.ratingArr[d.rating])-5)
    //   .text(function(d) { return this.ratingArr[d.rating] });
  }

}
