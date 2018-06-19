module.exports = function() {
  let $mwSlideMenuMask = $(tag("div", {class: "mw-slide-menu-mask"}));
  let $mwSlideMenu = $(tag("div", {class: "mw-slide-menu"}));

  let createSlideMenuMask = function() {
    $body.prepend($mwSlideMenuMask);
  };

  let createSlideMenu = function() {
    $body.prepend($mwSlideMenu);
  };

  let createMiniHeader = function() {
    let $mwMenuHeader = $(tag("div", {class: "mw-slide-menu-header"}));
    let $logoClone = $body.find(".logo").clone();
    $mwMenuHeader.append($logoClone);
    $mwMenuHeader.append(tag("div", {class: "mw-icon mw-icon-close-navigation"}));
    $mwSlideMenu.append($mwMenuHeader);
  };

  let createNavigationList = function() {
    let $topNavigationList = $body.find("#top-nav-menu").addClass("mw-navigation");
    let $topNavigationListItems = $topNavigationList.children("li");
    // Footer links
    let $footerNavigationList = $body.find(".navigation-links");
    let $footerNavigationListItems = $footerNavigationList.children("li");
    let $footerQuickLinksDropDown = $body.find(".container-footer-quicklinks-dropdown");
    $footerNavigationListItems.last().remove();
    $footerNavigationListItems.each(function(){
      let $this = $(this);
      let $listItemLink = $this.children("a");
      if ($listItemLink.length) {
        let $target = $listItemLink.attr("data-toggler-target");
        if($target) {
          $this.append($footerQuickLinksDropDown.find($target).addClass("mw-sublist"));
        } else {
          $listItemLink.addClass("mw-link-only");
        }
        
        $listItemLink.addClass("mw_bar2");
      }
      $topNavigationList.append($this);
      $this.addClass("mw-toggler-bottom");
    });
    $topNavigationListItems.addClass("mw-toggler");
    $topNavigationListItems.children("a").addClass("mw_bar1");
    $mwSlideMenu.append($topNavigationList);
  };

  let createL2TopLists = function() {
    let $lists = $body.find(".mw-slide-menu .mw-toggler");
    $lists.each(function() {
      let $this = $(this);
      let $dropdownLinks = $this.find(".top-nav-dropdown-links");
      let $dropdownLinkItem = $dropdownLinks.find("li");
      $dropdownLinks.find("h2").addClass("mw_bar4");
      $dropdownLinkItem.find("a").addClass("mw_bar3");
      $dropdownLinks.find("li.underline").prev("li").remove();
      $this.find(".feature-messaging").remove();
      $this.find(".nav-dropdown-menu").addClass("mw-sublist");
    });
  };

  let createL2BottomLists = function() {
    let $lists = $body.find(".mw-slide-menu .mw-toggler-bottom");
    $lists.each(function() {
      let $this = $(this);
      let $dropdownLinks = $this.children(".footer-quicklinks-dropdown");
      $dropdownLinks.find("h3").addClass("mw_bar4");
      $dropdownLinks.find("li").children("a").addClass("mw_bar3");
      $this.find(".feature-messaging").remove();
    });
  };

  let createNavTogglers = function() {
    $body.find(".mw-toggler, .mw-toggler-bottom").each(function() {
      let $this = $(this);
      let $button = $this.children("a:not('.mw-link-only')");
      let $content = $this.find(".mw-sublist");
      $button.removeAttr("href");
      $button.name("span").removeAttr("data-toggle");
      $button.addClass("mw-bar-nav mw-L1");
      if ($content.length > 0) {
        $this.attr("data-ur-set", "toggler");
        $button.attr("data-ur-toggler-component", "button");
        $content.attr("data-ur-toggler-component", "content");
      }
    });
  };

  createSlideMenu();
  createSlideMenuMask();
  createMiniHeader();
  createNavigationList();
  createL2TopLists();
  createL2BottomLists();
  createNavTogglers();

  return {
    createSlideMenu: createSlideMenu,
    createSlideMenuMask: createSlideMenuMask,
    createMiniHeader: createMiniHeader,
    createNavigationList: createNavigationList,
    createL2TopLists: createL2TopLists,
    createL2BottomLists: createL2BottomLists,
    createNavTogglers: createNavTogglers

  };
};
