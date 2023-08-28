function fizzBuzzBasic(n) {
    const answers = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answers.push("FizzBuzz");
        } else if (i % 3 === 0) {
            answers.push("Fizz");
        } else if (i % 5 === 0) {
            answers.push("Buzz");
        } else {
            answers.push(i.toString());
        }
    }

    return answers;
}

function fizzBuzzCustom(n, customCondition) {
    const answers = [];

    for (let i = 1; i <= n; i++) {
        answers.push(customCondition(i));
    }

    return answers;
}

async function fetchFizzBuzzFromServer(n) {
    const answers = [];

    for (let i = 1; i <= n; i++) {
        try {
            const response = await fetch(`/fizz-buz-server/run?num=${i}`);
            const data = await response.json();
            answers.push(data.solution);
        } catch (error) {
            console.error('Fetch error:', error);
            answers.push('Error fetching data');
        }
    }

    return answers;
}

const basicResult = fizzBuzzBasic(20);
console.log(basicResult);

const extension1Result = fizzBuzzCustom(20, i => {
    if (i % 3 === 0 || i % 5 === 0) {
        return "FizzBuzz";
    } else {
        return i.toString();
    }
});
console.log(extension1Result);

fetchFizzBuzzFromServer(20)
    .then(serverResult => {
        console.log(serverResult);
    })
    .catch(error => {
        console.error(error);
    });
