"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Card, CardContent, CardHeader, CardTitle } from "./card-shadcn";

export default function RadialOrbitalTimeline({ timelineData }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [viewMode] = useState("orbital");
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState({});
  const [centerOffset] = useState({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [radius, setRadius] = useState(180);
  
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer;

    const handleResize = () => {
      setRadius(window.innerWidth < 640 ? 110 : 180);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId) => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId) => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "completed":
        return "text-white bg-vyra-violet border-white/20";
      case "in-progress":
        return "text-black bg-white border-black";
      case "pending":
        return "text-white bg-black/40 border-white/50";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="w-full h-full min-h-[600px] flex flex-col items-center justify-center overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center transition-transform duration-1000"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Center Sun/Core */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-vyra-violet via-electric-blue to-glow-cyan animate-pulse flex items-center justify-center z-10 shadow-[0_0_30px_rgba(124,58,237,0.5)]">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md"></div>
          </div>

          <div 
            className="absolute rounded-full border border-white/10 border-dashed opacity-50 transition-all duration-300"
            style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
          ></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Energy Ring */}
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    transitionDuration: "1s"
                  }}
                ></div>

                {/* Node Dot */}
                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-white text-vyra-black"
                      : isRelated
                      ? "bg-white/30 text-white backdrop-blur-sm"
                      : "bg-vyra-black text-white"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-white shadow-lg shadow-white/30"
                      : isRelated
                      ? "border-glow-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                      : "border-white/20"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-125" : ""}
                `}
                >
                  <Icon size={18} className={isExpanded ? "" : "opacity-80"} />
                </div>

                {/* Always visible label (if not expanded) */}
                <div
                  className={`
                  absolute top-12 whitespace-nowrap left-1/2 -translate-x-1/2
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "opacity-0 invisible" : "text-white/70"}
                `}
                >
                  {item.title}
                </div>

                {/* Expanded Card Detail */}
                {isExpanded && (
                  <Card className="absolute top-16 left-1/2 -translate-x-1/2 w-[280px] sm:w-[320px] bg-[#0B1020]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-vyra-violet/20 overflow-visible z-50">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/30"></div>
                    <CardHeader className="pb-3 border-b border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <Badge
                          className={`px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "COMPLETE"
                            : item.status === "in-progress"
                            ? "ACTIVE"
                            : "PENDING"}
                        </Badge>
                        <span className="text-[10px] font-mono text-glow-cyan font-bold tracking-widest uppercase">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-lg text-white font-bold tracking-tight leading-tight">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 text-sm text-gray-400 space-y-4">
                      <p className="leading-relaxed">{item.content}</p>

                      <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                        <div className="flex justify-between items-center text-xs mb-2">
                          <span className="flex items-center text-white/80 font-medium">
                            <Zap size={14} className="mr-1.5 text-glow-cyan" />
                            Pipeline Energy
                          </span>
                          <span className="font-mono text-glow-cyan">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-black rounded-full overflow-hidden border border-white/5">
                          <div
                            className="h-full bg-gradient-to-r from-glow-cyan to-vyra-violet relative"
                            style={{ width: `${item.energy}%` }}
                          >
                            <div className="absolute inset-0 w-full h-full animate-pulse bg-white/30 mix-blend-overlay"></div>
                          </div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="pt-2">
                          <div className="flex items-center mb-2.5">
                            <Link size={12} className="text-white/50 mr-1.5" />
                            <h4 className="text-[10px] uppercase tracking-widest font-bold text-white/50">
                              Connected Workflows
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="secondary"
                                  size="sm"
                                  className="h-7 px-2.5 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 rounded-md text-xs transition-colors"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={10}
                                    className="ml-1.5 opacity-50"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
