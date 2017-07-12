import moment from 'moment';

let navbar = {
    templateUrl: 'js/components/common/navbar.html',
    controller: ['UsersService', '$state', function (UsersService, $state) {
        'use strict'
        angular.extend(this, {
            $onInit() {
                this.moment = moment().format('MMMM Do YYYY, h:mm:ss a');
                UsersService.getCurrent().then((user) => {
                    this.user = user
                }).catch((err) => {

                })

                function getCurrentTime() {
                    this.moment = moment().format('MMMM Do YYYY, h:mm:ss a');
                    // $rootScope.$emit('moment', this.moment);
                    // timeout date effective in console log by not binded in the view ... why ? ..
                    console.log(this.moment);
                }

                function displayCurrentTime() {
                    setInterval(getCurrentTime, 1000)
                };
                displayCurrentTime();

            },
            disconnect() {
                UsersService.disconnect().then(() => {
                    Materialize.toast('Disconnected', 4000, 'toast-warning')
                    this.user = null
                    $state.reload()
                })
            }
            // $onChanges() {
            //     $rootScope.$on('moment', (evt, query) => {
            //         this.querySearch = query;
            //         this.getUsers(query.status);
            //     });
            // }
        })
    }]
}

export default navbar