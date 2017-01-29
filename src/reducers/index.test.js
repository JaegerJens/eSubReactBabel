import reducer from './index.js'

const noAction = {type: undefined};

describe('reducer', () => {
    it('executes the hierarchy reducer', () => {
        const state = {
            hierarchy: {
                data: ['t1', 't2'],
                selected: 1
            }
        };
        expect(reducer(state, noAction).hierarchy).toEqual(state.hierarchy);
    });
    it('executes the sequence reducer', () => {
        const state = {
            sequence: {
                dossier: 'my little dossier',
                data: ['m1', 'm2', 'm3'],
                selected: 2
            }
        };
        expect(reducer(state, noAction).sequence).toEqual(state.sequence);
    });
    it('executes the mainview reducer', () => {
        const state = {
            mainview: {
                layout: {
                    leftside: 40,
                    rightside: 60
                },
                colors: {
                    header: 'blue',
                    footer: 'green'
                }
            }
        };
        expect(reducer(state, noAction).mainview).toEqual(state.mainview);
    });
})