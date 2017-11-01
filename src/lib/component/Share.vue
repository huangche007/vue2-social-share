<template>
    <div class="vue-share-container">
        <div class="share-to">
            <a class="share-icon share-qq-k" @click="shareQQ()"></a>
            <a class="share-icon share-qq-friend" target="_blank" id="qq_friend" @click="shareQQFriend()"></a>
            <a class="share-icon share-weibo" @click="shareWeiBo()"></a>
            <a class="share-icon share-wechat" @click="shareWeiXin()"></a>
            <a class="share-icon share-wechat-circle" @click="shareWeiXin()"></a>
        </div>
    </div>
</template>
<script>
    export default{
        props:['items'],
        data(){

        },
        mounted(){
          console.log("this.items:",this.items);
        },
        methods:{
            shareWeiXin(){
                this.weixin();
            },
            weixin(){
                var iWidth=720;                          //弹出窗口的宽度;
                var iHeight=600;                         //弹出窗口的高度;
                //获得窗口的垂直位置
                var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
                //获得窗口的水平位置
                var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
                var target_url =`http://qr.liantu.com/api.php?text=${window.location.href}`;
                window.open(target_url, 'weixin', 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no');
            },
            shareQQFriend(){
                $("#qq_friend").attr("href",this.qqFriend());
            },
            /**
             *
             * QQ空间分享
             * */
            qqFriend() {
                var p = {
                    url : window.location.href, /*获取URL，可加上来自分享到QQ标识，方便统计*/
                    desc:this.items.abstract,
                    //title : '新玩法，再不来你就out了！', /*分享标题(可选)*/
                    title:this.items.title,
                    summary : '', /*分享摘要(可选)*/
                    pics : this.items.image, /*分享图片(可选)*/
                    flash : '', /*视频地址(可选)*/
                    site : "QQ分享", /*分享来源(可选) 如：QQ分享*/
                    style : '201',
                    width : 32,
                    height : 32
                };
//     http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2F192.168.0.110%3A8080%2F%23%2Fnewsdetail%2F458&title=ecmagnet-pc&desc=&summary=&site=ecmagnet-pc
                var s = [];
                for ( var i in p) {
                    s.push(i + '=' + encodeURIComponent(p[i] || ''));
                }
                var url = "http://connect.qq.com/widget/shareqq/index.html?"+s.join('&');
                return url;

            },

            qqZone(){
                var _url = window.location.href;
                var _showcount = 0;
                var _desc = this.items.abstract;
                var _summary = "";
                var _title = this.items.title;
                var _site = "";
                var _width = "600px";
                var _height = "800px";
                var _summary = "";
                var _pic = this.items.image;
                var _shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
                _shareUrl += 'url=' + encodeURIComponent(_url||document.location);   //参数url设置分享的内容链接|默认当前页location
                _shareUrl += '&showcount=' + _showcount||0;      //参数showcount是否显示分享总数,显示：'1'，不显示：'0'，默认不显示
                _shareUrl += '&desc=' + encodeURIComponent(_desc||'分享的描述');    //参数desc设置分享的描述，可选参数
                //_shareUrl += '&summary=' + encodeURIComponent(_summary||'分享摘要');    //参数summary设置分享摘要，可选参数
                _shareUrl += '&title=' + encodeURIComponent(_title||document.title);    //参数title设置分享标题，可选参数
                //_shareUrl += '&site=' + encodeURIComponent(_site||'');   //参数site设置分享来源，可选参数
                _shareUrl += '&pics=' + encodeURIComponent(_pic||'');   //参数pics设置分享图片的路径，多张图片以＂|＂隔开，可选参数
                window.open(_shareUrl,'width='+_width+',height='+_height+',top='+(screen.height-_height)/2+',left='+(screen.width-_width)/2+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
            },
            shareQQ(){
                this.qqZone();
            },
            /**
             * 分享到微博
             * */
            shareWeiBo(){
                var title = this.items.title;
                var url = window.location.href;
                var picurl = this.items.image;
                var sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='+picurl;
                window.open(sharesinastring,'newwindow',`height=400,width=400,top=100,left=100`);
            },
        }
    }
</script>
<style scoped>
    @import "../../assets/css/share.css";
</style>