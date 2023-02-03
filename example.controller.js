
class ExampleController { 
    static throwErrorMethod(req, res) {
        throw new Error('Some error that can happen during the app execution');
    }
}

module.exports = ExampleController;
