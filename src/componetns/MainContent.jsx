function MainContent() {
    return (
        <main className="main">
            <section className="main-header">
                <ul className="main-header__lists">
                    <li>Today</li>
                    <li>Week</li>
                </ul>
                <div className="main-header__content">
                    Today Content
                </div>
                <div className="main-header__content">
                    Week Content
                </div>
            </section>
            <section className="main-body">
                <h1>Today's Highlights</h1>
            </section>
        </main>
    )
}

export default MainContent