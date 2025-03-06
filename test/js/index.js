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
document.addEventListener('click', function (event) {
    var target = event.target;
    if (target && target.id === 'expandButton') {
        var div = document.querySelector('#newDiv');
        if (div === null) {
            div = document.createElement('div');
            div.id = 'newDiv';
            div.innerHTML = "Logo";
            var expandButton = document.getElementById('expandButton');
            if (expandButton && expandButton.parentNode) {
                expandButton.parentNode.insertBefore(div, expandButton.nextSibling);
            }
            CloudLocalization.translateElement(div);
        }
        else {
            div.remove();
        }
    }
});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8saUJBQWlCLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlGLGlCQUFpQixDQUFDO0lBQ2QsU0FBUyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsSUFBSTtZQUNWLFdBQVcsRUFBRSxTQUFTO1NBQ3pCLEVBQUU7WUFDQyxJQUFJLEVBQUUsSUFBSTtZQUNWLFdBQVcsRUFBRSxTQUFTO1NBQ3pCLEVBQUU7WUFDQyxJQUFJLEVBQUUsSUFBSTtZQUNWLFdBQVcsRUFBRSxVQUFVO1NBQzFCLEVBQUU7WUFDQyxJQUFJLEVBQUUsT0FBTztZQUNiLFdBQVcsRUFBRSxtQkFBbUI7U0FDbkMsRUFBRTtZQUNDLElBQUksRUFBRSxJQUFJO1lBQ1YsV0FBVyxFQUFFLFNBQVM7WUFDdEIsU0FBUyxFQUFFLGlCQUFpQixDQUFDLEdBQUc7U0FDbkMsQ0FBQztDQUNMLENBQUMsQ0FBQztBQUdILE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXBELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFLO0lBQzlDLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFxQixDQUFDO0lBQzNDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssY0FBYyxFQUFFO1FBQ3hDLElBQUksR0FBRyxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXpELElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtZQUNkLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBRXZCLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDN0QsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLFVBQVUsRUFBRTtnQkFDekMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN2RTtZQUVELGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDaEI7S0FDSjtBQUNMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsb3VkTG9jYWxpemF0aW9uLCB7IENsb3VkTG9jYWxpemF0aW9uLCBMYW5ndWFnZURpcmVjdGlvbiB9IGZyb20gXCIuL2Nsb3VkbG9jYWxpemF0aW9uXCI7XHJcblxyXG5jbG91ZExvY2FsaXphdGlvbih7XHJcbiAgICBsYW5ndWFnZXM6IFt7XHJcbiAgICAgICAgY29kZTogJ2VuJyxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ0VuZ2xpc2gnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgY29kZTogJ2VzJyxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ1NwYW5pc2gnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgY29kZTogJ2ZyJyxcclxuICAgICAgICBkaXNwbGF5TmFtZTogJ0ZyYW7Dp2FpcydcclxuICAgIH0sIHtcclxuICAgICAgICBjb2RlOiAnZnItY2EnLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiAnRnJhbsOnYWlzIChDYW5hZGEpJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIGNvZGU6ICdhcicsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6ICfYp9mE2LnYsdio2YrYqScsXHJcbiAgICAgICAgZGlyZWN0aW9uOiBMYW5ndWFnZURpcmVjdGlvbi5ydGxcclxuICAgIH1dXHJcbn0pO1xyXG5cclxuLy8gR2V0IHNlbGVjdGVkIGxhbmd1YWdlIGNvZGUuXHJcbmNvbnNvbGUubG9nKENsb3VkTG9jYWxpemF0aW9uLmN1cnJlbnRMYW5ndWFnZS5jb2RlKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5pZCA9PT0gJ2V4cGFuZEJ1dHRvbicpIHtcclxuICAgICAgICBsZXQgZGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdEaXYnKTtcclxuXHJcbiAgICAgICAgaWYgKGRpdiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZGl2LmlkID0gJ25ld0Rpdic7XHJcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBcIkxvZ29cIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBhbmRCdXR0b24nKTtcclxuICAgICAgICAgICAgaWYgKGV4cGFuZEJ1dHRvbiAmJiBleHBhbmRCdXR0b24ucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kQnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpdiwgZXhwYW5kQnV0dG9uLm5leHRTaWJsaW5nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQ2xvdWRMb2NhbGl6YXRpb24udHJhbnNsYXRlRWxlbWVudChkaXYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdi5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyJdfQ==
