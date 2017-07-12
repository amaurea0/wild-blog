/*
Create Angular component blogItem into module app.blog with databinding properties
- post : post data for all content
- editable : boolean indicate if this element is editable
*/
let algo = {
    templateUrl: 'js/components/algo/algo.html',
    controller: [function () {
        'use  strict'
        let initialPost;

        this.$onInit = () => {
            this.friends = this.friend(["Ryan", "Kieran", "Mark"]);
        }

        this.friend = (list) => {
            let friends = [];
            for (let name of list) {
                if (name.length == 4) {
                    friends.push(name);
                }
            }
            return friends;
        }

    }]
}

export default algo