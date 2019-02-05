import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
  cards: any;

  constructor() { }

  ngOnInit() {
    this.cards = [
      { codetitle: 'Create Table', code: 'CREATE TABLE customer (\ncust_number NUMBER(2), \ncust_fname VARCHAR(20), \ncust_name VARCHAR(20), \ncust_balance NUMBER);' },
      { codetitle: 'Insert Data', code: 'INSERT INTO customer VALUES (01,"Tarun", "Patel", 10000);' },
      { codetitle: 'View Table', code: 'SELECT * FROM customer;' },
      { codetitle: 'Save Table', code: 'COMMIT;' },
      { codetitle: 'Drop Table', code: 'DROP TABLE CUSTOMER;' },
    ];
    $(document).ready(function () {
      $('.code').each(function () {
        var temp = $(this).children().html().replace(/\n/g, "<br />");
        $(this).children('span').val(temp);
        $(this).children('span').html(temp);
      });
      $('.copy').each(function (index) {
        $(this).on('click', function () {
          var elm = $(this).prev().text();
          var $temp = $("<input>");
          $("body").append($temp);
          $temp.val(elm).select();
          document.execCommand("copy");
          $temp.remove();
          console.log(elm);
        });
      });
    });
  }
}