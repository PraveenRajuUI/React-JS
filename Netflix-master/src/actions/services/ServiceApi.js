import data from '../../data/data';

const timeout = 500;
class DataService {
    static getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, timeout);
        });
    }
}

export default DataService;
