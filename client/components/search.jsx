import React from 'react';
var classNames = require('classnames');
var reddits = ['announcement  s','blog','funny','pics','reddit.com','wtf','science','politics','worldnews','technology','askreddit','programming','gaming','offbeat','entertainment','atheism','comics','business','geek','videos','iama','bestof','music','economics','todayilearned','humor','gadgets','environment','news','wikipedia','linux','sex','movies','scifi','space','doesanybodyelse','cogsci','food','philosophy','marijuana','frugal','fffffffuuuuuuuuuuuu','self','health','books','history','photography','math','worldpolitics','sports','apple','web_design','art','howto','happy','energy','netsec','aww','libertarian','webgames','diy','tldr','lolcats','obama','economy','psychology','conspiracy','canada','xkcd','fitness','design','drugs','python','photos','listentothis','cooking','compsci','sexy','trees','4chan','physics','software','writing','relationship_advice','freethought','skeptic','opensource','hardware','twoxchromosomes','wearethemusicmakers','video','lgbt','mensrights','anarchism','beer','guns','pictures','documentaries','android','bicycling','tf2','women','religion','coding','astronomy','iphone','youshouldknow','bacon','ubuntu','itookapicture','circlejerk','cannabis','craigslist','zombies','webcomics','opendirectories','lectures','woahdude','collapse','lists','javascript','ps3','carlhprogramming','travel','green','anime','christianity','pic','hackers','google','firefox','australia','lost','government','military','linguistics','zenhabits','tech','japan','rpg','ruby','socialism','starcraft','worstof','shittyadvice','newreddits','somethingimade','robotics','guitar','education','cpp','metal','haskell','moviecritic','seduction','mma','ronpaul','productivity','php','buddhism','nature','feminisms','jokes','computersecurity','unitedkingdom','astro','windowshots','bad_cop_no_donut','reverseengineering','literature','tipofmytongue','browsers','chemistry','pets','lisp','soccer','socialmedia','celebrities','philosophyofscience','architecture','hockey','wallpapers','bestofcraigslist','truereddit','perl','secretsanta','fashion','equality','suicidewatch','conspiracies','redditstories','meetup','torrents','youtube','doctorwho','india','ukpolitics','wow','l33t','xbox360','israel','recipes','homebrewing','usa','europe','mac','tedtalks','electronicmusic','dailywtf','law','osx','interestingasfuck','graffiti','biology','autos','evolution','apathy','redditchan','linux4noobs','vegan','lostgeneration','startups','anthropology','nyc','gardening','django','facebookquotes','java','911truth','transhuman','vim','sociology','things','cheap_meals','csbooks','gamedev','blackops','dubstep','idea','microsoft','ilivein','television','uspe08','drunk','area51','indiegaming','machinelearning','starwars','quotes','trippy','lol','ufos','americanpolitics','standupcomedy','selfsufficiency','nonprofit','movieclub','scientology','auto','logo','ideas','science2','americangovernment','veg','survivalist','zen','engineering','seattle','bash','survival','kde','cheats','electronics','cute','needadvice','cyberlaws','creepy','ted','overpopulation','poker','joel','catpictures','ideasfortheadmins','linux_gaming','erlang','chicago','reddithax','emacs','boston','celebcrack','hacking','malefashionadvice','politicalhumor','learnprogramming','euro','gossip','hardscience','c_programming','academicphilosophy','startrek','hrw','wave','paranormal','love','coffee','dwarffortress','ece','depression','softwaredevelopment','ediscover','worldwidenews','austin','ama','dotnet','tonightsdinner','progressive','windows','tipoftheday','portland','howtodiy','onlinegames','twitter','selfhelp','ladybashing','ohwhataworld','database','islam','scientific','formula1','bsd','motorcycles','porn','ireland','codeprojects','investing','psychonaut','comicbooks','crime','poetry','jobs','ads','eve','lsd','webdesign','networking','agi','neuro','snobs','liberty','slackerrecipes','palinproblem','toronto','reportthespammers','aviation','scheme','mmj','fakenews','vegetarianism','climateskeptics','conservative','functional','sanfrancisco','spaceflight','fascinating','pcgaming','finance','culture','blogs','iwantout','reddittraveljetblue','commonlaw','independent','gif','typography','pandemic','occult','baseball','freegames','dnb','classicalmusic','mw2','appengine','fiction','theology','asm','tothemoon','jazz','marketing','wdp','photocritique','parenting','egalitarian','animals','entrepreneur','trance','types','language','wallpaper','musictheory','archlinux','digg','promos','hipstergurlz','bestgamesever','learnjapanese','statistics','chrome','sysor','bikinis','apod','hacks','redditmusicclub','climate','systems','techplore','evopsych','visualization','gnu','wireless','clojure','mashups','radioreddit','cryptogon','photoshop','putinforpresident','bioinformatics','computergraphics','redditdev','c_language','search','baking','idap','anticonsumption','alternativehealth','unix','learnanewlanguage','rugc','semanticweb','rails','scala','magictcg','bugs','intp','geopolitics','singularity','sonyps3','animalrights','losangeles','taoism','social_bookmarking','mathbooks','freemusic','pch','git','newzealand','tmbr','learnmath','fsm','furry','culturalstudies','webnews','shortfilms','tea','de','mexico','smart','philadelphia','campingandhiking','war','lovecraft','chess','webmaster','nootropics','tattoos','financialplanning','omegle','redditbooks','cplusplus','wackyworld','permaculture','whedon','worldnews2','artificial','bayarea','musicians','fail','lego','mspainttoday','ecoreddit','greasemonkey','celebrity','1000words','zombie','hackernews','indierock','animation','seo','freelance','fantasy','guitarlessons','askme','whalebait','england','p2p','lastnight','whitemengonewild','geospatial','linux_devices','wii','longtext','moddit','meta','gamereviews','artcrit','askusers','agile','redditmakesagame','spacefleet','emmawatson','matheducation','mixes','sysadmin','security','haiti','til','apocalypse','meditation','media','nonaustrianeconomics','pittsburgh','vid','internet','charts','itsnotonion','learning','dogs','piracy','nanotech','texas','noveltyaccounts','shortstories','ocaml','eebooks','work','screenwriting','forts','france','yourweek','organicgardening','mycology','dragonage','datasets','trust','politicalphilosophy','picture','designthought','trt','wordplay','podcasts','tips_tricks','americanhistory','algorithms'];
var Search = React.createClass({
  getInitialState: function() {
    return {hintText: false, refresh: false}
  },
  componentDidMount: function(){
    console.log(this.refs.searchInput);
    // ReactDOM.findDOMNode(this.refs.searchInput).focus();
    // this.refs.searchInput.focus();
    // this.refs.searchInput.select(); 
	},
  handleHintText: function(searchText) {
    this.setState({
      hintText: searchText.length != 0
    });
  },
  searchText: function(){
    if(this.refs.searchInput) {
      // console.log('search text is ' + this.refs.searchInput.value)
      return this.refs.searchInput.value
    }
    else
      return ''
  },
  searchResults: function(){
    // console.log('searching');
    var searchText = this.searchText();
    var results = [];
    if(searchText.length){
      for(var i = 0; i<reddits.length; i++){
        // console.log('looking for ' + searchText + ' in ' + reddits[i])
        if(reddits[i].indexOf(searchText) >= 0) {
          // console.log('pushed ' + reddits[i])
          results.push(reddits[i]);
          // console.log(' there are ' + results.length)
          if(results.length > 9) {
            break;
          }
        }
      }
    }
    // console.log('results');
    // console.log(results);
    return results
  },
  renderResults: function(){
    // console.log('rendering');
    var searchResults = this.searchResults();
    if(searchResults.length > 0) {
      return (
        searchResults.map(function(subreddit){
          return <p className="search-result transition-short">{subreddit}</p>
        })
      )
    }
    else {
      return (
        <p>enter a subreddit</p>
      )
    } 
  },
  handleKeyUp: function() {
    // console.log('keyup');
    this.handleHintText('');
  },
  render: function() {
  	var searchClasses = classNames('search-wrap', {hintText: this.state.hintText});
  	var hintClasses = classNames('transition', {invisible: this.state.hintText});
    return (
      <div className={searchClasses}>
        <input type='text' className='search' ref='searchInput' onKeyUp={this.handleKeyUp}></input>
        <div classNames={hintClasses}>
          {this.renderResults()}
        </div>
      </div>
    );
  }
})

export default Search;