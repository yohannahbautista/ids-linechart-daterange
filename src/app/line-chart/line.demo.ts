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
        {
          name: 'Feb 1',
          value: 21057,
          color: '#1a66ff',
        },
        {
          name: 'Feb 2',
          value: 31565,
          color: '#1a66ff',
        },
        {
          name: 'Feb 3',
          value: 53411,
          color: '#1a66ff',
        },
        {
          name: 'Feb 4',
          value: 52396,
          color: '#1a66ff',
        },
        {
          name: 'Feb 5',
          value: 34845,
          color: '#1a66ff',
        },
        {
          name: 'Feb 6',
          value: 26702,
          color: '#1a66ff',
        },
        {
          name: 'Feb 7',
          value: 22551,
          color: '#1a66ff',
        },
        {
          name: 'Feb 8',
          value: 33855,
          color: '#1a66ff',
        },
        {
          name: 'Feb 9',
          value: 35938,
          color: '#1a66ff',
        },
        {
          name: 'Feb 10',
          value: 34472,
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
