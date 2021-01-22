import React from 'react'
import { NativeModules } from 'react-native';

const consultas = [{
    id:1,
    especialidade: 'Dermatologista',
    date: '18/10',
    hora: '11:30',
    local:'rua 123 do abc São Paulo-SP',
    hospital:'sus da vida',
    tipo:'retorno',
    nomeMedico:'Doutor Rafael'
},{
    id:2,
    especialidade: 'Oculista',
    date: '14/10',
    hora: '10:30',
    local:'rua 123 do abc São Paulo-SP',
    hospital:'sus da vida',
    tipo:'retorno',
    nomeMedico:'Doutor Rafael'
},{
    id:3,
    especialidade: 'Clinico Geral',
    date: '14/10',
    hora: '10:30',
    local:'rua 123 do abc São Paulo-SP',
    hospital:'sus da vida',
    tipo:'retorno',
    nomeMedico:'Doutor Rafael'
},{
    id:4,
    especialidade: 'Pediatra',
    date: '14/10',
    hora: '10:30',
    local:'rua 123 do abc São Paulo-SP',
    hospital:'sus da vida',
    tipo:'retorno',
    nomeMedico:'Doutor Rafael'
},];

const hosp = [{id_Hosp:1}]

export default consultas