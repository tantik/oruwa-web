export function ProductVisual({ compact = false }: { compact?: boolean }) {
  return <div className={`product-stage ${compact ? 'compact' : ''}`} aria-label="ORUWA Cafe product interface illustration">
    <div className="manager-panel"><div className="mock-topline"><span>Manager Today</span><span className="status-dot">要確認 3</span></div><h2>おはようございます</h2><p>今日、確認が必要なこと</p><div className="attention-card amber"><strong>在庫不足</strong><span>タピオカ / 牛乳</span></div><div className="attention-card"><strong>シフト交代</strong><span>1件の承認待ち</span></div><div className="week-row"><span>月</span><span className="active">火</span><span>水</span><span>木</span><span>金</span></div></div>
    <div className="staff-phone"><div className="phone-bar"><span>Staff</span><span>EN</span></div><p className="phone-label">Inventory check</p><strong>閉店時の在庫確認</strong><div className="stock-row"><span>Milk</span><span>4</span></div><div className="stock-row shortage"><span>Tapioca</span><span>1</span></div><span className="mock-button">更新する</span></div><p className="mock-note">{compact ? 'Product UI composition' : '製品UIをもとにしたイメージ'}</p>
  </div>;
}
