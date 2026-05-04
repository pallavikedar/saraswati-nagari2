

import React, { useState, useRef, useEffect } from "react";
import image from "../../assets/layouts1.jpg";
import { useNavigate } from "react-router-dom";

// CSS Styles
const styles = `
.container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #ffffffff 100%);
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}
  .button1 {
  padding:10px;
   background-color: #0a7a2d;
  color: white;
  }

.header {
  background: linear-gradient(135deg, #fffcf7ff 0%, #fffbf4ff 100%);
  color: #876730ff;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.headerTitle {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.legend {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 0.95rem;
}

.legendItem {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
}

.legendColor {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.legendColor.sold { background-color: #ef4444; }
.legendColor.reserved { background-color: #eab308; }
.legendColor.available { background-color: #10b981; }
.legendColor.open { background-color: #3b82f6; }

.mainContent {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 1.5rem;
  padding: 1.5rem;
  flex: 1;
}

/* Map Section */
.mapSection {
  background: white;
  // border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.mapHeader {
  background: linear-gradient(135deg, #fcf6edff 0%, #fcf1dfff 100%);
  color: #9c7946ff;
  padding: 1rem 1.5rem;
  font-weight: 600;
  font-size: 1.1rem;
}

.scrollContainer {
  flex: 1;
  overflow: auto;
  background-color: #f9fafb;
  padding: 1.5rem;
}

.scrollContainer::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.scrollContainer::-webkit-scrollbar-track {
  background: #e5e7eb;
  border-radius: 10px;
}

.scrollContainer::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #d6ab65 0%, #c7ab7d 100%);
  border-radius: 10px;
}

.mapWrapper {
  display: inline-block;
  min-width: 100%;
}

.mapContainer {
  position: relative;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 0.75rem;
  overflow: hidden;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  min-width: 800px;
  max-width: 1200px;
}

.plotButton {
  position: absolute;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  color: #ffffff;
  font-weight: 700;
  font-size: clamp(0.7rem, 0.9vw, 0.9rem);
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.plotButton:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  z-index: 20;
  border-width: 3px;
}

.plotButton.selected {
  border-color: #fbbf24;
  border-width: 4px;
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.8);
  z-index: 25;
}

/* Status Panel */
.statusPanel {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: calc(120vh - 250px);
}

.statusHeader {
      background: linear-gradient(135deg, #d6ab65 0%, #c7ab7d 100%)
  color: white;
  padding: 1rem 1.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  z-index: 10;
}

.statusGrid {
  overflow-y: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.75rem;
}

.statusGrid::-webkit-scrollbar {
  width: 8px;
}

.statusGrid::-webkit-scrollbar-track {
  background: #f3f4f6;
}

.statusGrid::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #d6ab65 0%, #c7ab7d 100%)
  border-radius: 10px;
}

.plotCard {
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
}

.plotCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  border-color: #667eea;
}

.plotCard.selected {
  border-color: #fbbf24;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  box-shadow: 0 8px 20px rgba(251, 191, 36, 0.3);
}

.plotCard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
}

.plotCard.sold::before { background: #ef4444; }
.plotCard.reserved::before { background: #eab308; }
.plotCard.available::before { background: #10b981; }
.plotCard.open::before { background: #3b82f6; }

.plotNumber {
  font-size: 1.2rem;
  font-weight: 800;
  color: #34332dff;
  margin-bottom: 0.5rem;
}

.plotType {
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.plotSize {
  font-size: 0.8rem;
  color: #374151;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.plotPrice {
  font-size: 0.9rem;
  font-weight: 700;
  color: #059669;
  margin-bottom: 0.5rem;
}

.statusBadge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
}

.statusBadge.sold {
  background-color: #fee2e2;
  color: #991b1b;
}

.statusBadge.reserved {
  background-color: #fef3c7;
  color: #92400e;
}

.statusBadge.available {
  background-color: #d1fae5;
  color: #065f46;
}

.statusBadge.open {
  background-color: #dbeafe;
  color: #1e40af;
}

/* Modal */
.modalOverlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modalContent {
  background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 500px;
  width: 100%;
  padding: 2rem;
  position: relative;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.closeButton {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f3f4f6;
  border: none;
  color: #6b7280;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  transition: all 0.2s ease;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.closeButton:hover {
  background: #ef4444;
  color: white;
}

.modalContent h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 1rem 0;
      background: linear-gradient(135deg, #d6ab65 0%, #c7ab7d 100%)
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.modalStatus {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 2px solid;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.modalStatus.sold {
  background-color: #fee2e2;
  color: #991b1b;
  border-color: #fca5a5;
}

.modalStatus.reserved {
  background-color: #fef3c7;
  color: #92400e;
  border-color: #fcd34d;
}

.modalStatus.available {
  background-color: #d1fae5;
  color: #065f46;
  border-color: #6ee7b7;
}

.modalStatus.open {
  background-color: #dbeafe;
  color: #1e40af;
  border-color: #93c5fd;
}

.plotDetails {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.plotDetails p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e5e7eb;
  margin: 0;
  font-size: 1rem;
}

.plotDetails p:last-child {
  border-bottom: none;
}

.plotDetails strong {
  font-weight: 600;
  color: #374151;
}

.price {
  font-weight: 700;
  font-size: 1.25rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contactInfo {
  font-size: 0.95rem;
  color: #4b5563;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 1rem;
  border-radius: 0.75rem;
  margin: 0;
  line-height: 1.6;
  border-left: 4px solid #3b82f6;
}

@media (max-width: 640px) {
.container {
  
  height: 200vh;
  
}
  .header { 
    padding: 1.5rem 1rem; 
  }
  .headerTitle { 
    font-size: 1.5rem; 
  }
  .legend { 
    gap: 1rem; 
    font-size: 0.85rem; 
  }
  
  .statusGrid { 
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); 
  }
  .modalContent { 
    padding: 1.5rem; 
  }
  .mainContent {
    display: flex !important; /* Force flex over grid for reliable stacking */
    flex-direction: column !important; /* Vertical stack: map top, status bottom */
    gap: 1rem;
    padding: 1rem;
    height: auto; /* Ensure full height availability */
    min-height: 0; /* Allow shrinking if needed, but flex children will expand */
  }


}
`;

const plots = [
  { id: 1, top: "355px", left: "687px", width: "157px", height: "65px" },
  { id: 2, top: "354px", left: "626px", width: "62px", height: "69px" },
  { id: 3, top: "353px", left: "586px", width: "41px", height: "71px" },
  { id: 4, top: "351px", left: "549px", width: "38px", height: "74px" },
  { id: 5, top: "347px", left: "506px", width: "44px", height: "80px" },
  { id: 6, top: "344px", left: "461px", width: "46px", height: "88px" },
  { id: 7, top: "342px", left: "417px", width: "46px", height: "91px" },
  { id: 8, top: "340px", left: "388px", width: "46px", height: "91px" },
  { id: 9, top: "338px", left: "332px", width: "46px", height: "91px" },
  { id: 10, top: "335px", left: "290px", width: "46px", height: "91px" },
  { id: 11, top: "332px", left: "250px", width: "46px", height: "91px" },
  { id: 12, top: "330px", left: "200px", width: "46px", height: "91px" },
  { id: 13, top: "328px", left: "150px", width: "46px", height: "91px" },
  { id: 14, top: "326px", left: "100px", width: "46px", height: "91px" },
  { id: 15, top: "324px", left: "50px", width: "46px", height: "91px" },
  { id: 16, top: "35%", left: "34.8%", width: "3.5%", height: "23%" },
  { id: 17, top: "35%", left: "38.6%", width: "3.5%", height: "23%" },
  { id: 18, top: "35%", left: "42.4%", width: "3.5%", height: "23%" },
  { id: 19, top: "35%", left: "46.2%", width: "3.5%", height: "23%" },
  { id: 20, top: "35%", left: "50%", width: "3.5%", height: "23%" },
  { id: 21, top: "35%", left: "53.8%", width: "3.5%", height: "23%" },
  { id: 22, top: "35%", left: "57.6%", width: "3.5%", height: "23%" },
  { id: 23, top: "35%", left: "61.4%", width: "3.5%", height: "23%" },
  { id: 24, top: "35%", left: "65.2%", width: "3.5%", height: "23%" },
  { id: 25, top: "35%", left: "69%", width: "3.5%", height: "23%" },
  { id: 26, top: "35%", left: "72.8%", width: "3.5%", height: "23%" },
  { id: 27, top: "35%", left: "76.6%", width: "3.5%", height: "23%" },
  { id: 28, top: "35%", left: "80.4%", width: "3.5%", height: "23%" },
  { id: 29, top: "35%", left: "85.5%", width: "6%", height: "23%" },
  { id: 30, top: "35%", left: "91.2%", width: "3.5%", height: "23%" },
];

const data = [
  { id: 1,  price: "3000", type: "Standard Lot", status: "sold" },
  { id: 2, price: "3000", type: "Standard Lot", status: "sold" },
  { id: 3, price: "3000", type: "Standard Lot", status: "available" },
  { id: 4,  price: "3000", type: "Standard Lot", status: "sold" },
  { id: 5,  price: "3000", type: "Standard Lot", status: "sold" },
  { id: 6,  price: "3000", type: "Standard Lot", status: "sold" },
  { id: 7,  price: "3000", type: "Standard Lot", status: "sold" },
  { id: 8,  price: "3000", type: "Standard Lot", status: "sold" },
  { id: 9,  price: "3000", type: "Standard Lot", status: "sold" },
  { id: 10,  price: "3000", type: "Standard Lot", status: "sold" },
  { id: 11,  price: "3000", type: "Standard Lot", status: "sold" },
  { id: 12,  price: "3000", type: "Standard Lot", status: "sold" },
  { id: 13,  price: "3000", type: "Standard Lot", status: "available" },
  { id: 14,  price: "3000", type: "Standard Lot", status: "sold" },
  { id: 15,  price: "3000", type: "Standard Lot", status: "sold" },
  { id: 16,  price: "3000", type: "Standard Lot", status: "sold" },
  
];

const Map5 = () => {
    const navigate = useNavigate()
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return () => styleSheet.remove();
  }, []);

  const handlePlotClick = (id) => {
    const plotDetails = data.find((item) => item.id === id);
    setSelectedPlot(plotDetails || null);
    setShowModal(true);
  };

  const getStatusColor = (status) => {
    if (status === "sold") return "rgba(239, 68, 68, 0.7)";
    if (status === "reserved") return "rgba(234, 179, 8, 0.7)";
    if (status === "open") return "rgba(59, 130, 246, 0.7)";
    return "rgba(16, 185, 129, 0.7)";
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        {/* <h1 className="headerTitle">Plot Layout Map - Professional View</h1> */}
        <div className="legend">
          <div className="legendItem">
            <div className="legendColor sold"></div>
            <span>Sold</span>
          </div>
          <div className="legendItem">
            <div className="legendColor reserved"></div>
            <span>Reserved</span>
          </div>
          <div className="legendItem">
            <div className="legendColor available"></div>
            <span>Available</span>
          </div>
          <div className="legendItem">
            <div className="legendColor open"></div>
            <span>Open Space</span>
          </div>
        </div>
      </div>

      {/* Main Content - Split View */}
      <div className="mainContent">
        {/* Map Section (Left) */}
        <div className="mapSection">
          <div className="mapHeader">📍 Interactive Plot Map</div>
          <div className="scrollContainer">
            <div className="mapWrapper">
              <div className="mapContainer">
                <img
                  ref={imageRef}
                  src="https://firebasestorage.googleapis.com/v0/b/abhi-9bd8f.firebasestorage.app/o/SARASWATI%20NAGRI%205%20(1).jpg?alt=media&token=c556b5a4-ffde-4b3f-b257-ec77f63f7fcc"
                  alt="Plot Layout Map"
                  className="image"
                />
                {/* {plots.map((plot) => {
                  const plotData = data.find((item) => item.id === plot.id);
                  const bgColor = getStatusColor(plotData?.status);
                  const isSelected = selectedPlot?.id === plot.id;

                  return (
                    <button
                      key={plot.id}
                      onClick={() => handlePlotClick(plot.id)}
                      className={`plotButton ${isSelected ? 'selected' : ''}`}
                      style={{
                        top: plot.top,
                        left: plot.left,
                        width: plot.width,
                        height: plot.height,
                        backgroundColor: bgColor,
                      }}
                    >
                      {plot.id}
                    </button>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>

        {/* Status Panel (Right) */}
        <div className="statusPanel">
          <div className="statusHeader">📋 Plot Status Overview</div>
          <div className="statusGrid">
            {data.map((plot) => {
              const isSelected = selectedPlot?.id === plot.id;
              return (
                <div
                  key={plot.id}
                  onClick={() => handlePlotClick(plot.id)}
                  className={`plotCard ${plot.status} ${isSelected ? 'selected' : ''}`}
                >
                  <div className="plotNumber">{plot.id}</div>
                  <div className="plotType">{plot.type}</div>
                  <div className="plotSize">{plot.size}</div>
                  <div className="plotPrice">
                    {plot.price === "N/A" ? "Not for Sale" : plot.price}
                  </div>
                  <span className={`statusBadge ${plot.status}`}>
                    {plot.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedPlot && (
        <div className="modalOverlay" onClick={() => setShowModal(false)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button
              className="closeButton"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h2>
              {selectedPlot.type === "Open Space" 
                ? "🏞️ Open Space" 
                : `🏠 Plot #${selectedPlot.id}`}
            </h2>

            <span className={`modalStatus ${selectedPlot.status}`}>
              {selectedPlot.status}
            </span>

            <div className="plotDetails">
             
              <p>
                <strong>💰 Price:</strong>
                <span className="price">
                  {selectedPlot.price === "N/A" ? "Not for Sale" : selectedPlot.price}
                </span>
              </p>
              <p>
                <strong>🏷️ Type:</strong>
                <span>{selectedPlot.type}</span>
              </p>
            </div>
           {selectedPlot.status === "available" ? <button className="button1" onClick={()=>navigate("/enquiry")}> Enquiry For Booking </button>
           :"" }
            <p className="contactInfo">
              <strong>ℹ️ Information:</strong><br />
              {selectedPlot.status === "sold"
                ? "This plot has been sold."
                : selectedPlot.status === "open"
                ? "This is an open space/playground area, not available for purchase."
                : selectedPlot.status === "reserved"
                ? "This plot is currently reserved."
                : "This plot is available for purchase!"}
              {" "}Contact our sales team for more information at +91 9494942894


              

            </p>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Map5;



