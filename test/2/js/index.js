var exports = {};
cloudLocalization({
    languages: [{
            code: 'en',
            displayName: 'English'
        }, {
            code: 'es',
            displayName: 'Spanish'
        }, {
            code: 'fr',
            displayName: 'Français'
        }, {
            code: 'fr-ca',
            displayName: 'Français (Canada)'
        }, {
            code: 'ar',
            displayName: 'العربية',
            direction: LanguageDirection.rtl
        }]
});
console.log(CloudLocalization.currentLanguage.code);
$(document).on('click', '#expandButton', function () {
    var div = document.querySelector('#newDiv');
    if (div === null) {
        div = document.createElement('div');
        div.id = 'newDiv';
        div.innerHTML = "Logo";
        $(div).insertAfter('#expandButton');
        CloudLocalization.translateElement(div);
    }
    else {
        $(div).remove();
    }
});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8saUJBQWlCLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlGLGlCQUFpQixDQUFDO0lBQ2QsU0FBUyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsSUFBSTtZQUNWLFdBQVcsRUFBRSxTQUFTO1NBQ3pCLEVBQUU7WUFDQyxJQUFJLEVBQUUsSUFBSTtZQUNWLFdBQVcsRUFBRSxTQUFTO1NBQ3pCLEVBQUU7WUFDQyxJQUFJLEVBQUUsSUFBSTtZQUNWLFdBQVcsRUFBRSxVQUFVO1NBQzFCLEVBQUU7WUFDQyxJQUFJLEVBQUUsT0FBTztZQUNiLFdBQVcsRUFBRSxtQkFBbUI7U0FDbkMsRUFBRTtZQUNDLElBQUksRUFBRSxJQUFJO1lBQ1YsV0FBVyxFQUFFLFNBQVM7WUFDdEIsU0FBUyxFQUFFLGlCQUFpQixDQUFDLEdBQUc7U0FDbkMsQ0FBQztDQUNMLENBQUMsQ0FBQztBQUdILE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXBELENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRTtJQUVyQyxJQUFJLEdBQUcsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV6RCxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7UUFDZCxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUNsQixHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUV2QixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXBDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzNDO1NBQU07UUFDSCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDbkI7QUFDTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbG91ZExvY2FsaXphdGlvbiwgeyBDbG91ZExvY2FsaXphdGlvbiwgTGFuZ3VhZ2VEaXJlY3Rpb24gfSBmcm9tIFwiLi9jbG91ZGxvY2FsaXphdGlvblwiO1xyXG5cclxuY2xvdWRMb2NhbGl6YXRpb24oe1xyXG4gICAgbGFuZ3VhZ2VzOiBbe1xyXG4gICAgICAgIGNvZGU6ICdlbicsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICdFbmdsaXNoJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIGNvZGU6ICdlcycsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICdTcGFuaXNoJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIGNvZGU6ICdmcicsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICdGcmFuw6dhaXMnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgY29kZTogJ2ZyLWNhJyxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ0ZyYW7Dp2FpcyAoQ2FuYWRhKSdcclxuICAgIH0sIHtcclxuICAgICAgICBjb2RlOiAnYXInLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAn2KfZhNi52LHYqNmK2KknLFxyXG4gICAgICAgIGRpcmVjdGlvbjogTGFuZ3VhZ2VEaXJlY3Rpb24ucnRsXHJcbiAgICB9XVxyXG59KTtcclxuXHJcbi8vIEdldCBzZWxlY3RlZCBsYW5ndWFnZSBjb2RlLlxyXG5jb25zb2xlLmxvZyhDbG91ZExvY2FsaXphdGlvbi5jdXJyZW50TGFuZ3VhZ2UuY29kZSk7XHJcblxyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2V4cGFuZEJ1dHRvbicsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBsZXQgZGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdEaXYnKTtcclxuXHJcbiAgICBpZiAoZGl2ID09PSBudWxsKSB7XHJcbiAgICAgICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LmlkID0gJ25ld0Rpdic7XHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IFwiTG9nb1wiO1xyXG5cclxuICAgICAgICAkKGRpdikuaW5zZXJ0QWZ0ZXIoJyNleHBhbmRCdXR0b24nKTtcclxuXHJcbiAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlRWxlbWVudChkaXYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKGRpdikucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn0pOyJdfQ==