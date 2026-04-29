import styles from "./ActivityIntro.module.css";

export default function ActivityIntro({
  kicker,
  title,
  accent,
  lead,
  items = [],
}) {
  return (
    <section className="section" aria-label={typeof title === "string" ? title : "activity intro"}>
      <div className="inner">
        <header className={styles.header}>
          {kicker ? <p className="kicker">{kicker}</p> : null}

          <h1 className={styles.title}>
            {title}
            {accent ? (
              <>
                <br />
                <span className={styles.sub}>{accent}</span>
              </>
            ) : null}
          </h1>

          {lead ? <p className={styles.lead}>{lead}</p> : null}

          {items.length > 0 ? (
            <div className={styles.metaRow}>
              {items.map((item, index) => (
                <div className={styles.meta} key={`${item.label}-${index}`}>
                  <div className={styles.metaLabel}>{item.label}</div>
                  <div className={styles.metaValue}>{item.value}</div>
                </div>
              ))}
            </div>
          ) : null}
        </header>
      </div>
    </section>
  );
}