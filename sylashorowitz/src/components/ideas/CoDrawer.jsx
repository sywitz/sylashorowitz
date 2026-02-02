/**
 * CoDrawer - Co-Drawer System Ideas
 * 
 * Detailed notes on collaborative sketch-driven engineering and the Co-Drawer system.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import '../../styles/Ideas.css';

function CoDrawer() {
  useScrollToTop();

  return (
    <div id="ideas" className="ideas-container">
      <div className="ideas-content">
        <Link 
          to="/ideas" 
          className="ideas-back-button"
          style={{
            display: 'inline-block',
            marginBottom: 'var(--spacing-2xl)',
            color: 'var(--color-primary-dark)',
            textDecoration: 'none',
            fontSize: 'var(--font-size-base)',
            fontWeight: 'var(--font-weight-medium)',
            borderBottom: '1px solid transparent',
            transition: 'border-color var(--transition-base)'
          }}
          onMouseEnter={(e) => e.target.style.borderBottomColor = 'var(--color-primary-dark)'}
          onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}
        >
          ← Back to Ideas
        </Link>
        <header className="ideas-header">
          <h1>Co-Drawer</h1>
          <p className="ideas-subtitle">
            Notes on collaborative sketch-driven engineering and natural interaction
          </p>
        </header>

        <section className="ideas-section">
          <h2>How This Started</h2>
          <div className="ideas-text">
            <p>
              I was designing a new mounting bracket for the ROV frame. Spent three hours in 
              SolidWorks just to test one idea—drawing the sketch, extruding, adding fillets, 
              setting up the analysis. By the time I had results, I'd forgotten why I made half 
              the design decisions. That's when it clicked: I'm spending more time fighting the 
              tool than thinking about the design.
            </p>
            
            <p>
              The bracket I ended up with was fine, but it wasn't the best one. I only tested 
              two variations because each one took so long. On a whiteboard, I would have 
              sketched ten different approaches in the same time. But then you have to throw the 
              sketch away and rebuild everything in CAD anyway, so what's the point?
            </p>

            <p>
              That's the core problem: sketching and CAD are completely disconnected. You do your 
              real thinking in sketches, then you throw that work away and start over in CAD. The 
              sketch has all the design intent—you know this bracket connects these two parts, 
              carries this load, needs to be accessible for maintenance. But by the time you're 
              in CAD, you're just building geometry. The intent gets lost.
            </p>

            <p>
              There's this gap between informal ideas and formal drafting. Sketches are fast and 
              fluid, but they're just marks on paper. CAD is precise and powerful, but it's rigid 
              and slow. Co-Drawer sits in between—it's meant to be an intermediary that lets you 
              work in that space where ideas are still forming, but with some of the power of formal 
              tools.
            </p>

            <p>
              Collaboration is worse. Even with real-time sync in Fusion or Onshape, you're still 
              working in isolated sessions. Can't have overlapping conversations like you do on a 
              whiteboard. Someone draws something, you want to modify it immediately, but you have 
              to wait for them to finish their operation. The tools enforce turn-taking, which 
              kills the flow.
            </p>
          </div>
        </section>

        <section className="ideas-section">
          <h2>What We're Building</h2>
          <div className="ideas-text">
            <p>
              So we started building Co-Drawer. Basic idea: treat sketches as first-class design 
              objects. You draw naturally, system figures out what you mean. No menus, no tool 
              selection. Just draw.
            </p>

            <p>
              The conceptual power is that it's an intermediary between formal drafting and informal 
              ideas. You're not committing to precise geometry yet, but you're also not just making 
              marks that will be thrown away. The sketch gradually becomes more formal as you refine 
              it, but you can always step back to the informal version. It's that middle space where 
              most of the actual design thinking happens.
            </p>

            <p>
              I started with the streaming part because that seemed like the foundation. If we 
              can't get multiple people drawing together smoothly, the rest doesn't matter.
            </p>

            <p>
              We have a prototype working now for the streaming and collaboration part. It streams 
              sketches from iPad and Remarkable into a shared web browser, then streams back to 
              each device's native environment.
            </p>

            <p>
              The Remarkable integration was tricky—had to reverse engineer their protocol. They 
              use SSH over USB, and the drawing data comes through their file system. I'm reading 
              the `.rm` files directly and parsing the stroke data. iPad was easier, just using 
              PencilKit and the native drawing APIs. The web browser part uses WebSockets for 
              real-time sync.
            </p>

            <p>
              Multiple people can draw simultaneously and see each other's work in real-time. The 
              multiplayer sync is still buggy though—sometimes strokes get out of order, especially 
              with network latency. When someone draws fast, the WebSocket messages can arrive out 
              of sequence. Working on adding timestamps and ordering logic.
            </p>

            <p>
              The interesting part—and this is still mostly ideas, not built yet—is that sketches 
              shouldn't just be 2D. When you sketch a bracket, the system should understand it as 
              a 3D object.
            </p>

            <p>
              The idea is to use a combination of geometric inference and ML models trained on 
              engineering drawings. You draw a side view, and it shows you the isometric right 
              there in the sketch. That's the goal anyway. We haven't built this part yet. I've 
              been looking at some papers on sketch-based 3D reconstruction, but haven't started 
              implementing anything.
            </p>

            <p>
              The sketch should evolve into a CAD model naturally, not through some conversion 
              step. As you refine the drawing, the system refines the underlying parametric model. 
              But you can always step back—the informal sketch is still there, you're not locked 
              into the formal version.
            </p>

            <p>
              The idea is to use constraint solving—when you draw a connection, the system infers 
              constraints (parallel, perpendicular, etc.) and maintains them as you modify. The 
              boundary between sketch and CAD disappears, or at least that's the goal. You're working 
              in that intermediary space where the sketch is becoming more formal, but hasn't lost 
              its fluidity. We're not there yet. This is all still in the planning phase. I've been 
              reading about geometric constraint solvers, but haven't implemented anything.
            </p>

            <p>
              Simulation should be part of the sketch process too. The idea is that you're drawing 
              a bracket, and the system is running basic FEA in the background. You see stress 
              concentrations as you draw.
            </p>

            <p>
              We'd use simplified models for speed—full FEA would be too slow. But even the 
              simplified version should give useful feedback. You sketch a flow path, get pressure 
              drop estimates. The simulation isn't a separate tool you switch to, it's just there, 
              part of how you understand what you're designing.
            </p>

            <p>
              This is all still conceptual though—we haven't built any of the simulation integration 
              yet. I've thought about using something like CalculiX or maybe just simple beam 
              theory for quick estimates, but haven't started on it.
            </p>

            <p>
              The vision is that the sketch becomes a live, interactive model. You're not just 
              drawing a static representation. You're manipulating something that understands 
              geometry and physics. You can pull on a connection point and see forces redistribute. 
              Sketch a modification, immediately see how it affects stress. But again, this is 
              the long-term vision. We're not there yet.
            </p>

            <p>
              Making all of this feel natural is going to be the hard part. The 3D representation 
              needs to appear organically from the 2D sketch, not as a jarring pop-in. The CAD 
              model needs to emerge incrementally as you refine your drawing, not as a discrete 
              step. The simulation needs to run fast enough to feel responsive, but accurate enough 
              to be useful. These are all problems we'll have to solve, but we haven't started on 
              them yet.
            </p>

            <p>
              Right now we're focused on getting the streaming and collaboration working smoothly. 
              The iPad and Remarkable integration lets people use their preferred devices. Web 
              browser provides a shared view.
            </p>

            <p>
              We want to push the native integration further—each device should leverage its 
              native capabilities while still participating in the shared session. The Remarkable 
              has that e-ink display which is great for drawing, but we can't really use it for 
              3D visualization. iPad can do both, but the drawing experience isn't as good. Trade-offs 
              everywhere.
            </p>

            <p>
              The long-term vision is that you shouldn't have to think about whether you're 
              sketching, modeling in CAD, or running simulation. It's all the same process. You 
              draw, and the system shows you whatever representation is most useful at that moment—2D 
              sketch, 3D model, simulation result. The tool adapts to what you need.
            </p>

            <p>
              But the real power is that intermediary space—you're not choosing between informal 
              and formal. You're working in that middle ground where ideas can flow freely but still 
              have structure. The sketch can be as loose or as precise as you need it to be, and you 
              can move between those modes fluidly. But we're a long way from that. Right now we 
              just have basic streaming working. The rest is still ideas.
            </p>
          </div>
        </section>

        <section className="ideas-section">
          <h2>Related Ideas</h2>
          <div className="ideas-text">
            <p>
              One thing I've been thinking about is how to handle ambiguity. Traditional CAD 
              forces you to be precise from the start. But early design is inherently ambiguous—you 
              don't know the exact dimensions yet, you're exploring relationships. The system should 
              embrace that ambiguity. Maybe you sketch "this bracket should be about this size" and 
              the system maintains that as a range, not a fixed dimension. As you refine, the range 
              narrows. But you can always go back and widen it again if you need to explore.
            </p>

            <p>
              Another idea: the system should understand context. If you're sketching a mounting 
              bracket, it should know that brackets typically have certain features—holes for 
              fasteners, clearance for tools, etc. But it shouldn't force those on you. It should 
              suggest them, and you can accept or ignore. The system learns from how you work, 
              not the other way around.
            </p>

            <p>
              I've been thinking about different modes of interaction. Sometimes you want to draw 
              freehand. Sometimes you want to snap to grids or align with existing geometry. 
              Sometimes you want to describe what you want verbally while sketching. The system 
              should support all of these, and let you switch between them fluidly. Not separate 
              modes you toggle, but natural transitions based on what you're doing.
            </p>

            <p>
              Collaboration could work in different ways too. Maybe one person is sketching the 
              overall concept while another is refining details. Or multiple people working on 
              different parts that need to connect. The system should understand these relationships 
              and help maintain them. If someone modifies a connection point, the system should 
              suggest how that affects other people's work, not just break silently.
            </p>

            <p>
              There's also the idea of different representations for different purposes. Sometimes 
              you need to see the 3D model. Sometimes you need the 2D sketch. Sometimes you need 
              the simulation results. Sometimes you need the manufacturing constraints. The system 
              should show you what's relevant, and you should be able to switch views without 
              losing your place. The sketch is the anchor—everything else is just a different 
              way of looking at it.
            </p>

            <p>
              I've been thinking about how this relates to other tools too. You might start in 
              Co-Drawer, then export to SolidWorks for detailed design. Or import a CAD model 
              and sketch modifications on top of it. The boundaries should be porous. The sketch 
              shouldn't be locked into one system—it should be able to move between tools as the 
              design matures.
            </p>

            <p>
              Another idea: design intent should persist through the refinement process. When you 
              sketch "this bracket connects these two parts," that relationship should stay even 
              as the geometry becomes more precise. The system should remember why you made design 
              decisions, not just what they are. If you modify something later, it should remind 
              you of the original intent, or warn you if you're breaking it.
            </p>

            <p>
              I've been thinking about working at different scales simultaneously. You might be 
              sketching the overall system layout while someone else is working on a detail. Or 
              you might want to zoom into a connection point while keeping the larger context visible. 
              The system should support this multi-scale thinking—you shouldn't have to choose 
              between seeing the forest or the trees.
            </p>

            <p>
              Manufacturing constraints should inform the sketch early, not just at the end. If 
              you're sketching something that will be 3D printed, the system should suggest 
              overhang angles. If it's going to be machined, it should suggest draft angles or 
              undercut limitations. But these should be suggestions, not hard constraints—you 
              can ignore them if you have a reason, but the system helps you think about 
              manufacturability from the start.
            </p>

            <p>
              There's also the idea of keeping design alternatives alive. In traditional CAD, you 
              commit to one design. But in sketches, you often explore multiple options side by 
              side. The system should let you maintain multiple variations of the same part, 
              compare them, and merge ideas from different alternatives. You shouldn't have to 
              delete one to try another.
            </p>

            <p>
              I've been thinking about how different engineering domains could work together in 
              the same space. You might be sketching a mechanical part while someone else sketches 
              the electrical routing, and the system understands how they relate. Or structural 
              and thermal analysis happening simultaneously on the same sketch. The boundaries 
              between disciplines shouldn't be hard walls—they should be permeable.
            </p>
          </div>
        </section>

        <section className="ideas-section">
          <h2>Open Questions</h2>
          <div className="ideas-text">
            <p>
              There are obvious limitations. The sketch recognition will never be perfect. 
              Ambiguous drawings will always need human interpretation. Complex assemblies might 
              be too much for the system to handle.
            </p>

            <p>
              And maybe the whole approach is wrong—maybe engineers actually like the precision 
              and control of traditional CAD, and don't want it to be more sketch-like. We'll 
              find out. Right now it's just a prototype, and we're still figuring out what works.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CoDrawer;

