import { Component, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import { SohoLineComponent } from 'ids-enterprise-ng';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-demo',
  templateUrl: 'line.demo.html',
})
export class LineDemoComponent implements OnInit {
  @ViewChild(SohoLineComponent, { static: true })
  sohoLineComponent?: SohoLineComponent;

  public lineData = [
    {
      data: [
        {
          name: 'Jan 1',
          value: 2,
          color: '#1a66ff',
        },
        {
          name: 'Jan 16',
          value: 277114,
          color: '#1a66ff',
        },
        {
          name: 'Jan 17',
          value: 5429,
          color: '#1a66ff',
        },
        {
          name: 'Jan 18',
          value: 7310,
          color: '#1a66ff',
        },
        {
          name: 'Jan 19',
          value: 17183,
          color: '#1a66ff',
        },
        {
          name: 'Jan 20',
          value: 20109,
          color: '#1a66ff',
        },
        {
          name: 'Jan 21',
          value: 20965,
          color: '#1a66ff',
        },
        {
          name: 'Jan 22',
          value: 26621,
          color: '#1a66ff',
        },
        {
          name: 'Jan 23',
          value: 14333,
          color: '#1a66ff',
        },
        {
          name: 'Jan 24',
          value: 11054,
          color: '#1a66ff',
        },
        {
          name: 'Jan 25',
          value: 23369,
          color: '#1a66ff',
        },
        {
          name: 'Jan 26',
          value: 29493,
          color: '#1a66ff',
        },
        {
          name: 'Jan 27',
          value: 29371,
          color: '#1a66ff',
        },
        {
          name: 'Jan 28',
          value: 27697,
          color: '#1a66ff',
        },
        {
          name: 'Jan 29',
          value: 28246,
          color: '#1a66ff',
        },
        {
          name: 'Jan 30',
          value: 14616,
          color: '#1a66ff',
        },
        {
          name: 'Jan 31',
          value: 14196,
          color: '#1a66ff',
        },
      ],
    },
  ];

  public xAxis?: {};

  constructor() {}

  ngOnInit(): void {
    const parseDate = d3.timeParse('%b %d'),
      formatDate = d3.timeFormat('%b');
    const dates = this.lineData[0].data.map((d) => parseDate(d.name));
    const minDate = d3.min(d3.values(dates as any)),
      maxDate = d3.max(d3.values(dates as any));
    this.xAxis = {
      scale: d3.scaleTime(),
      domain: [minDate, maxDate],
      ticks: d3.timeMonth,
      formatter: (d: any) => {
        return formatDate(d);
      },
      parser: (d: any) => {
        return parseDate(d.name);
      },
    };
  }
}
