const types = ['pan', 'hukum', 'chidi', 'itta']
const nums = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

const displayData = (choosedOne) => {
    const element = document.getElementById('row')
    element.innerHTML = ""
    choosedOne.forEach(e => {
        const splitdata = e.split('-')
        element.innerHTML += `<div class="col-lg-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">${splitdata[1]}</h5>
                                        <p class="card-text">${splitdata[0]}</p>
                                    </div>
                                </div>
                             </div>`
    });
}


const getResult = (player1, player2) => {
    let p1;
    let p2;
    let flag = 0
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < 3; i++) {
        p1 = player1[i].split('-')
        p1 = p1[0];
        arr1.push(nums.indexOf(p1))
    }
    for (let i = 0; i < 3; i++) {
        p2 = player2[i].split('-')
        p2 = p2[0];
        arr2.push(nums.indexOf(p2))
    }

    let max1 = Math.max(...arr1)
    let max2 = Math.max(...arr2)

    if (max1 > max2) {
        flag = 0;
    }
    else if (max1 == max2) {
        if (types.indexOf(nums[max1]) > types.indexOf(nums[max2])) {
            flag = 0
        } else {
            flag = 1
        }
    }
    else {
        flag = 1
    }

    if (flag == 0) {
        document.getElementById('result').innerHTML = "Player 1 is winner"
    }
    else {
        document.getElementById('result').innerHTML = "Player 2 is winner"
    }
}

const start = (element) => {
    element.innerHTML = "Restart"
    let player1 = [];
    let player2 = [];
    let choosedOne = [];
    for (let index = 0; index < 6; index++) {
        while (true) {
            let type = types[Math.floor(Math.random() * 4)]
            let num = nums[Math.floor(Math.random() * 13)]
            if (!choosedOne.includes(num + "-" + type)) {
                if (index < 3) {
                    player1.push(num + "-" + type)
                } else {
                    player2.push(num + "-" + type)
                }
                choosedOne.push(num + "-" + type)
                break
            }
        }
    }

    displayData(choosedOne);
    getResult(player1, player2)

}