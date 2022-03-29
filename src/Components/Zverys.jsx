function Zverys({anim}) {


    return (
        <div>
            
            
            <h1 style={{
                color: anim === 1 ? 'blue' : anim === 2 ? 'red': 'lightgreen'
                }}>Zebrai ir Bebrai</h1>

        </div>
    )
}

export default Zverys;