# vue2-social-share

> a social share plug for VueJs


## Usage

    npm install vue2-social-share -S
	
## How to use

You can import the whole package or each module individual.

	import VueShare from 'vue2-social-share'
	Vue.use(VueShare)

create one you component

	<VueShare :items="items"></VueShare>

this data of items just like this:


| Name        | Type           
| ------------- |:-------------:
| title      | String 
| url      | String      
| image | String      
|abstract|String
|desc|String

	items:{
		title:"",
		url:"",
		image:"",
		abstract:"",
		desc:""
	}

##	Available Share Ways

- QQFriend

	![QQFriendShare](http://img.blog.csdn.net/20171101095207320?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMDYyNDk4Ng==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

- QQRoom

	![QQRoom](http://img.blog.csdn.net/20171101095300423?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMDYyNDk4Ng==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

- WeiBo

	![WeiBo](http://img.blog.csdn.net/20171101095357573?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMDYyNDk4Ng==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

- WeChat

	![WeChat](http://img.blog.csdn.net/20171101095433499?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMDYyNDk4Ng==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

## Run this Demo

- download this Demo
- cnpm install
- npm run dev

**Do not use localhost to this test**