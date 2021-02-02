// JavaScript Document

var movie = function (title, rating) {
    this.title = title;
    this.rating = rating;
    this.niceText = function () { return title + "  " + rating }
};