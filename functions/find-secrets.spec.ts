import findSecrets from './find-secrets'

describe('findSecrets', () => {
  it('finds all the secrets in a string', () => {
    const orig = '{{if secret1}}sh{{/if}} {{if secret2}}shh{{/if}} {{if secret3}}shhh{{/if}}'
    const secrets = findSecrets(orig)
    expect(secrets).toHaveLength(3)
    expect(JSON.stringify(secrets[0])).toEqual('{"condition":"secret1","orig":"{{if secret1}}sh{{/if}}","text":"sh"}')
    expect(JSON.stringify(secrets[1])).toEqual('{"condition":"secret2","orig":"{{if secret2}}shh{{/if}}","text":"shh"}')
    expect(JSON.stringify(secrets[2])).toEqual('{"condition":"secret3","orig":"{{if secret3}}shhh{{/if}}","text":"shhh"}')
  })

  it('finds nested secrets', () => {
    const orig3 = '{{if secret3}}shhh{{/if}}'
    const orig2 = `{{if secret2}}shh ${orig3}{{/if}}`
    const orig = `{{if secret1}}sh ${orig2}{{/if}}`
    const secrets = findSecrets(orig)
    expect(secrets).toHaveLength(3)
    expect(JSON.stringify(secrets[0])).toEqual(`{"condition":"secret3","orig":"${orig3}","text":"shhh"}`)
    expect(JSON.stringify(secrets[1])).toEqual(`{"condition":"secret2","orig":"${orig2}","text":"shh ${orig3}"}`)
    expect(JSON.stringify(secrets[2])).toEqual(`{"condition":"secret1","orig":"${orig}","text":"sh ${orig2}"}`)
  })
})
