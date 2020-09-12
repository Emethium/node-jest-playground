let originalMath;

beforeAll(() => {
    originalMath = Object.create(global.Math);
})

beforeEach(() => {
    global.Math = originalMath;
})

// Describe can be user to contextualize and group any number of tests
describe('Testing suite tests', () => {
    test('Jest is working', () => {
        expect(1).toBe(1);
    });
});

describe('Random number creation', () => {
    test('returns a random number', () => {
        const mockMath = Object.create(global.Math);
        // We mock (reassing to a constant value) the .random function
        // so the returns are constant. Many functions contain uncontroled
        // behaviour (HTTP requests, etc), so mocking is extremely useful.
        mockMath.random = () => 0.75;
        global.Math = mockMath;
        const id = getNewId();
        
        expect(id).toBe(0.75);
    });

    test('returns an integer', () => {
        const id = getRandomIntegerId();
        expect(id).toBe(Math.floor(id));
    });
});

function getNewId() {
   return Math.random();
}

function getRandomIntegerId() {
   return Math.floor(Math.random());
}