import React, { Component } from 'react'

export default class Calcul extends Component {
    state = {
        c: 0,
        t: 0,
        d: 0,
        res: 0
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const m=(this.state.c )
    }

    handleChange = (e) => {
        const { name, value, type, checked } = e.target
        this.setState({
            [name]: type === "checkbox" ? checked : value
        })
    }
    render() {
        return (
            <div className='w-1/2 mx-auto bg-white h-screen p-32'>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-group flex flex-row justify-around items-center mb-7 border-b border-orange-500 pb-5 '>
                        <label className='text-orange-700 font-bold italic'>Capital emprunte :</label>
                        <input
                            className='border border-gray-950 rounded-lg outline-none focus:border-orange-600 focus:outline-none k p-2 '
                            type="number"
                            onChange={this.handleChange}
                            value={this.state.c}
                            name="c"
                        />
                        <p>DH</p>
                    </div>
                    <div className='input-group flex flex-row justify-around items-center mb-7 border-b border-orange-500 pb-5 '>
                        <label className='text-orange-700 font-bold italic'>Taux d'internet annuel:</label>
                        <input
                            className='border border-gray-950 rounded-lg outline-none focus:border-orange-600 focus:outline-none k p-2 '

                            type="number"
                            onChange={this.handleChange}
                            value={this.state.t}
                            name='t'
                        />
                        <p>%</p>
                    </div>
                    <div className='input-group flex flex-row justify-around items-center mb-7 border-b border-orange-500 pb-5 '>
                        <label className='text-orange-700 font-bold italic'>Duree de rembourssement:</label>
                        <input
                            className='border border-gray-950 rounded-lg outline-none focus:border-orange-600 focus:outline-none k p-2 '

                            type="number"
                            onChange={this.handleChange}
                            value={this.state.d}
                            name='d'
                        />
                        <p>Mois</p>
                    </div>
                    <button
                        className='bg-orange-700 p-2 px-4 text-gray-100 rounded-md font-bold hover:bg-orange-900 mb-7 w-2/3'
                    >Calculer</button>
                    <div className='input-group flex flex-row justify-around items-center mb-7 border-b border-orange-500 pb-5 '>
                        <label className='text-orange-700 font-bold italic'>La mensualité:</label>
                        <input
                            className='border border-gray-950 rounded-lg outline-none focus:border-orange-600 focus:outline-none k p-2 '

                            type="number"
                            // onChange={this.handleChange}
                            value={this.state.res}
                            readOnly
                        />
                        <p>DH</p>
                    </div>
                </form>
            </div>
        )
    }
}