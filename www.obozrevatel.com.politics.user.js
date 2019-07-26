// ==UserScript==
// @name         Obozrevatel | Politics
// @namespace    https://www.obozrevatel.com/politics/
// @noframes
// @version      0.1
// @description  Obozrevatel | www.obozrevatel.com | Politics
// @author       oleh.kyshlyan
// @match        http://www.obozrevatel.com/politics/*
// @match        https://www.obozrevatel.com/politics/*
// @match        http://www.obozrevatel.com/ukr/politics/*
// @match        https://www.obozrevatel.com/ukr/politics/*
// @require      https://code.jquery.com/jquery-3.4.0.min.js
// @grant        none
// ==/UserScript==

var ObozrevatelPolitics = new function(){

  this.body = function(){
    var bodyInclosure = function(){
      jQuery(function(){
        var body = jQuery('BODY');
        if(body.length == 1){
          body.css({"padding-top":"0px"});
          body.children().each(function(index,element){
            if(element.tagName == 'DIV'){
              var advIframe = jQuery(element).children("IFRAME");
              if(advIframe.length == 1){
                element.style.display = 'none';
              }
            }

            if(element.id.indexOf('admixer') != -1){
              element.style.display = 'none';
            }

            if(element.className.indexOf('page-switch') != -1){
              element.style.display = 'none';
            }

            if(element.tagName == 'FOOTER'){
              var backToTop = jQuery(element).children("DIV[class*='back-to-top']");
              if(backToTop.length == 1){
                backToTop.hide();
              }
            }
          });
        }
      });
    }
    setTimeout(bodyInclosure,3000);
  }

  this.newsFull = function(){
    var newsFullInclosure = function(){
      jQuery(function(){
        var newsFull = jQuery("BODY > DIV[class*='wide-wrapper'] DIV[class='news-full']");
        if(newsFull.length == 1){
          newsFull.children().each(function(index,element){
            if(element.className.indexOf('wrap-btn-facebook') != -1){
              element.style.display = 'none';
            }

            if(element.className.indexOf('rate-article') != -1){
              element.style.display = 'none';
            }

            if(element.className.indexOf('oboz-comments') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(newsFullInclosure,3100);
  }

  this.newsFullText = function(){
    var newsFullTextInclosure = function(){
      jQuery(function(){
        var newsFullText = jQuery("BODY > DIV[class*='wide-wrapper'] DIV[class='news-full'] > DIV[class*='news-full__text']");
        if(newsFullText.length == 1){
          newsFullText.children().each(function(index,element){
            if(element.className.indexOf('banner') != -1){
              element.style.display = 'none';
            }

            if(element.id.indexOf('google-content') != -1){
              element.style.display = 'none';
            }

            if(element.id.indexOf('admixer') != -1){
              element.style.display = 'none';
            }

            if(element.id.indexOf('adpartner') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(newsFullTextInclosure,3100);
  }

  this.loader = function(){
    var loaderInclosure = function(){
      jQuery(function(){
        var infiniteScroll = jQuery("BODY > DIV[class*='wide-wrapper'] > MAIN[class='main-col'] > DIV[class*='infinite-scroll']");
        if(infiniteScroll.length == 1){
          var secondMainCol = infiniteScroll.parent();
          secondMainCol.hide();
        }
      });
    }
    setTimeout(loaderInclosure,3100);
  }

  this.mainColRight = function(){
    var mainColRightInclosure = function(){
      jQuery(function(){
        var mainColRight = jQuery("BODY > DIV[class*='wide-wrapper'] > MAIN[class='main-col'] > DIV[class*='main-col__right']");
        if(mainColRight.length == 1){
          mainColRight.children().each(function(index,element){
            if(element.className.indexOf('banner') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(mainColRightInclosure,3100);
  }

  this.listBlog = function(){
    var listBlogInclosure = function(){
      jQuery(function(){
        var listBlog = jQuery("BODY > DIV[class*='wide-wrapper'] > MAIN[class='main-col'] > DIV[class*='main-col__right'] DIV[class*='list-blog']");
        if(listBlog.length == 1){
          listBlog.children().each(function(index,element){
            if(element.tagName == 'DIV'){
              var advIframe = jQuery(element).children("IFRAME");
              if(advIframe.length == 1){
                element.style.display = 'none';
              }
            }

            if(element.className.indexOf('banner') != -1){
              element.style.display = 'none';
            }

            if(element.id.indexOf('ads') != -1){
              element.style.display = 'none';
            }
          });
        }
      });
    }
    setTimeout(listBlogInclosure,3100);
  }

  this.onScrollElements = function(){
    jQuery(function(){
      var header = jQuery("BODY > HEADER[class*='header']");
      var headerTop = jQuery("BODY > HEADER[class*='header'] > DIV[class*='header-top']");
      header.css({"position":"static"});
      var hdrTopOriginalStyle = headerTop.attr("style");
      jQuery(window).on('scroll',function(){
        if(headerTop.attr("style").indexOf('fixed') != -1){
          headerTop.attr("style",hdrTopOriginalStyle)
        }
      });
    });
  }

}

ObozrevatelPolitics.body();
ObozrevatelPolitics.newsFull();
ObozrevatelPolitics.newsFullText();
ObozrevatelPolitics.loader();
ObozrevatelPolitics.mainColRight();
ObozrevatelPolitics.listBlog();
ObozrevatelPolitics.onScrollElements();
