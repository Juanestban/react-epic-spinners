import { useRef } from 'react'
import { MdContentCopy } from 'react-icons/md'
import { Container, BgCode, ButtonIcon, CodeContain } from './styles'

export const ContainerCopyCode = () => {
  const textToCopy = useRef<HTMLElement | null>(null)

  const handleCopy = async () => {
    if (!textToCopy.current) return
    const textCopied = textToCopy.current.textContent
    await navigator.clipboard.writeText(textCopied ?? '')
  }

  return (
    <Container>
      <BgCode>
        <CodeContain>
          <code ref={textToCopy}>npm i react-epic-spinners</code>
        </CodeContain>
        <ButtonIcon onClick={handleCopy}>
          <MdContentCopy color="white" size={20} />
        </ButtonIcon>
      </BgCode>
    </Container>
  )
}
