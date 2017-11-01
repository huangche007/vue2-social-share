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

##Available Share Ways

- QQFriend

- QQRoom

- WeiBo

- WeChat