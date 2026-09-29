class Solution {
    asteroidCollision(asteroids: number[]): number[] {
        const stack: number[] = [];

        for (const current of asteroids) {
            let alive = true;

            while (
                alive &&
                stack.length > 0 &&
                stack[stack.length - 1] > 0 &&
                current < 0
            ) {
                const top = stack[stack.length - 1];

                if (Math.abs(top) < Math.abs(current)) {
                    stack.pop();
                } else if (Math.abs(top) === Math.abs(current)) {
                    stack.pop();
                    alive = false;
                } else {
                    alive = false;
                }
            }

            if (alive) {
                stack.push(current);
            }
        }

        return stack;
    }
}