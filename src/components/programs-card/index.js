import React, { useState } from 'react'
import Card from '../card/'
import TextField from '../textfield/'
import './programs-card.css'
import DropDown from '../dropdown'
import Chip from '../chip'

function ProgramsCard (props) {
  const { program } = props
  program.responsibles = program.responsible.split(',')
  const [currentProgram, setCurrentProgram] = useState(program)
  const [flipped, setFlipped] = useState(false)
  const showCardView = {
    title: program.name,
    content: (
      <>
        <div className={'description'}>
          <div className={'card-description'}>{program.description} </div>
        </div>
        <div className={'owners'}>
          <div className={'card-subtitle'}>Responsables</div>
          <div className={'owner-text'}>{currentProgram.responsible}</div>
        </div>
      </>
    ),
    actions: [
      { name: 'Editar', handler: toggleEditMode },
      { name: 'Eliminar', handler: deleteProgram }
    ]
  }
  const editCardView = {
    title: '',
    content: (
      <>
        <div className='text-field-container'>
          <TextField placeholder='Nombre' defaultValue={program.name} />
        </div>
        <div className='text-field-container'>
          <TextField
            multiline
            placeholder='Descripcion'
            multiline
            rows={4}
            defaultValue={program.description}
          />
        </div>
        <div>Responsables</div>
        <div className='responsibles-container'>
          {currentProgram.responsibles.map(resp => (
            <Chip id={resp} text={resp} onClick={removeResponsible}></Chip>
          ))}
        </div>
        <div className='text-field-container'>
          <DropDown
            options={[
              'Option 1', // Hardcoded by now... Must be brougth from the backend
              'Option 2',
              'Option 3',
              'Option 4',
              'Option 5',
              'Option 6'
            ]}
            placeholder='Seleccione responsables'
            selectHandler={addResponsible}
          ></DropDown>
        </div>
      </>
    ),
    actions: [
      { name: 'Guardar', handler: saveProgram },
      { name: 'Cancelar', handler: toggleShowMode }
    ]
  }

  function toggleEditMode () {
    setFlipped(true)
  }

  function toggleShowMode () {
    setFlipped(false)
  }
  function addResponsible (responsible) {
    if (!currentProgram.responsibles.includes(responsible)) {
      currentProgram.responsibles.push(responsible)
      setCurrentProgram({ ...currentProgram })
    }
  }
  function removeResponsible (responsible) {
    currentProgram.responsibles.splice(
      currentProgram.responsibles.indexOf(responsible),
      1
    )
    setCurrentProgram({ ...currentProgram })
  }

  function saveProgram () {
    /* pending to implement */
  }

  function deleteProgram () {
    /* pending to implement */
  }
  return flipped ? (
    <Card
      title={editCardView.title}
      content={editCardView.content}
      actions={editCardView.actions}
    />
  ) : (
    <Card
      title={showCardView.title}
      content={showCardView.content}
      actions={showCardView.actions}
    />
  )
}

export default ProgramsCard
