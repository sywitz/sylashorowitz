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
              I was designing a new mounting bracket for the ROV frame. Spent <strong>three hours</strong> in 
              SolidWorks just to test <em>one</em> idea—drawing the sketch, extruding, adding fillets, 
              setting up the analysis. By the time I had results, I'd forgotten why I made half 
              the design decisions. <em>That's when it clicked</em>: I'm spending more time <strong>fighting the 
              tool</strong> than <strong>thinking about the design</strong>.
            </p>
            
            <p>
              The bracket I ended up with was <em>fine</em>, but it <strong>wasn't the best one</strong>. I only tested 
              two variations because each one took so long. On a whiteboard, I would have 
              sketched <strong>ten different approaches</strong> in the same time. But then you have to <strong>throw the 
              sketch away</strong> and rebuild everything in CAD anyway, so <em>what's the point?</em>
            </p>

            <p>
              That's the <strong>core problem</strong>: sketching and CAD are <strong>completely disconnected</strong>. You do your <em>real thinking</em> in sketches, then you throw that work away and start over in CAD. The 
              sketch has all the <strong>design intent</strong>—you know this bracket connects these two parts, 
              carries this load, needs to be accessible for maintenance. But by the time you're 
              in CAD, you're just building geometry. <em>The intent gets lost.</em>
            </p>

            <p>
              There's this <strong>gap</strong> between <em>informal ideas</em> and <em>formal drafting</em>. Sketches are <strong>fast and 
              fluid</strong>, but they're just marks on paper. CAD is <strong>precise and powerful</strong>, but it's <strong>rigid 
              and slow</strong>. Co-Drawer sits <em>in between</em>—it's meant to be an <strong>intermediary</strong> that lets you 
              work in that space where ideas are still forming, but with some of the power of formal 
              tools.
            </p>

            <p>
              Collaboration is <strong>worse</strong>. Even with real-time sync in Fusion or Onshape, you're still 
              working in <em>isolated sessions</em>. Can't have <strong>overlapping conversations</strong> like you do on a 
              whiteboard. Someone draws something, you want to modify it <em>immediately</em>, but you have 
              to wait for them to finish their operation. The tools <strong>enforce turn-taking</strong>, which <strong>kills the flow</strong>.
            </p>

            <p>
              But there's another problem that's <strong>even more fundamental</strong>: there's <strong>no good intermediary 
              between sketches, design optimization, and drafting</strong>. When you need to run FEA or 
              simulation, you have to build a CAD model <em>tailored specifically for that analysis</em>. 
              Then when you need formal drafting to send to manufacturers, you need <strong>another CAD 
              model</strong>—one that's set up for documentation, with proper 2D drawings, dimensions, 
              tolerances, all formatted correctly. The CAD process <strong>doesn't flow freely</strong>. Errors <strong>stack up</strong> in large assemblies. 2D drawings need <em>constant formatting and updating</em>. You 
              end up with <strong>multiple versions</strong> of the same design, each optimized for a different 
              purpose, and keeping them all in sync is a <strong>nightmare</strong>.
            </p>

            <p>
              This leads to engineering reviews and iterations that <strong>could have been avoided</strong>. If the 
              system understood what you were building <em>from the start</em>, if it could <strong>catch errors 
              early</strong>, if it could <strong>suggest optimizations</strong> as you design—you wouldn't need so many 
              rounds of review. The design would be <strong>better from the beginning</strong>.
            </p>
          </div>
        </section>

        <section className="ideas-section">
          <h2>What We're Building</h2>
          <div className="ideas-text">
            <p>
              So we started building Co-Drawer. Basic idea: treat sketches as <strong>first-class design 
              objects</strong>. You draw naturally, system figures out what you mean. <em>No menus, no tool 
              selection.</em> <strong>Just draw.</strong>
            </p>

            <p>
              The conceptual power is that it's an <strong>intermediary</strong> between <em>formal drafting</em> and <em>informal 
              ideas</em>. You're <strong>not committing to precise geometry yet</strong>, but you're also <strong>not just making 
              marks that will be thrown away</strong>. The sketch gradually becomes more formal as you refine 
              it, but you can <em>always step back</em> to the informal version. It's that <strong>middle space</strong> where 
              most of the <em>actual design thinking</em> happens.
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
              But here's the <strong>key idea</strong>: this <strong>isn't just</strong> a topology optimization tool or a generative 
              CAD tool. Those are useful, but they're still <em>tools you use</em>. Co-Drawer is meant to be 
              an <strong>AI assistant</strong> that <strong>understands deeply</strong> what you're building and <em>why</em>. It works  <strong>alongside you</strong> in real-time, understanding what you're modeling whether it's sketches, 
              2D, or 3D. It <strong>predicts</strong> what you could improve or do next. It <strong>resolves errors 
              automatically</strong>—if constraints conflict, if geometry doesn't make sense, if something 
              won't work for manufacturing, it <em>catches it</em> and <strong>suggests fixes</strong>.
            </p>

            <p>
              The system adjusts to run <strong>instant simulations</strong> that <strong>feed back into the design</strong>. You 
              sketch something, it runs a quick FEA, shows you where it's <em>weak</em>, suggests how to 
              strengthen it. You modify it, it runs the sim again. The feedback loop is <strong>tight</strong>—you're  <strong>not switching tools</strong>, you're <em>just drawing</em> and the system is helping you understand 
              what you're building through simulation results that appear as you work.
            </p>

            <p>
              Simulation should be <strong>part of the sketch process</strong> too. The idea is that you're drawing 
              a bracket, and the system is running basic FEA <em>in the background</em>. You see stress 
              concentrations <strong>as you draw</strong>.
            </p>

            <p>
              We'd use <em>simplified models</em> for speed—full FEA would be too slow. But even the 
              simplified version should give <strong>useful feedback</strong>. You sketch a flow path, get pressure 
              drop estimates. The simulation <strong>isn't a separate tool you switch to</strong>, it's <em>just there</em>, 
              part of how you understand what you're designing.
            </p>

            <p>
              This is all still conceptual though—we haven't built any of the simulation integration 
              yet. I've thought about using something like CalculiX or maybe just simple beam 
              theory for quick estimates, but haven't started on it.
            </p>

            <p>
              The vision is that the sketch becomes a <strong>live, interactive model</strong>. You're <strong>not just 
              drawing a static representation</strong>. You're manipulating something that <strong>understands 
              geometry and physics</strong>. You can pull on a connection point and see forces redistribute. 
              Sketch a modification, <em>immediately</em> see how it affects stress. But again, this is 
              the long-term vision. We're not there yet.
            </p>

            <p>
              Making all of this feel <strong>natural</strong> is going to be the hard part. The 3D representation 
              needs to appear <em>organically</em> from the 2D sketch, <strong>not as a jarring pop-in</strong>. The CAD 
              model needs to emerge <em>incrementally</em> as you refine your drawing, <strong>not as a discrete 
              step</strong>. The simulation needs to run <strong>fast enough to feel responsive</strong>, but <strong>accurate enough 
              to be useful</strong>. These are all problems we'll have to solve, but we haven't started on 
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
              But the <strong>real power</strong> is that <strong>intermediary space</strong>—you're <strong>not choosing between informal 
              and formal</strong>. You're working in that <em>middle ground</em> where ideas can <strong>flow freely</strong> but still 
              have structure. The sketch can be as <em>loose</em> or as <em>precise</em> as you need it to be, and you 
              can move between those modes <strong>fluidly</strong>. But we're a long way from that. Right now we 
              just have basic streaming working. The rest is still ideas.
            </p>
          </div>
        </section>

        <section className="ideas-section">
          <h2>Related Ideas</h2>
          <div className="ideas-text">
            <p>
              One thing I've been thinking about is how to handle <strong>ambiguity</strong>. Traditional CAD  <strong>forces you to be precise from the start</strong>. But early design is <em>inherently ambiguous</em>—you 
              don't know the exact dimensions yet, you're exploring relationships. The system should  <strong>embrace that ambiguity</strong>. Maybe you sketch "this bracket should be <em>about</em> this size" and 
              the system maintains that as a <em>range</em>, <strong>not a fixed dimension</strong>. As you refine, the range 
              narrows. But you can <em>always go back</em> and widen it again if you need to explore.
            </p>

            <p>
              Another idea: the system should <strong>understand context</strong>. If you're sketching a mounting 
              bracket, it should know that brackets typically have certain features—holes for 
              fasteners, clearance for tools, etc. But it <strong>shouldn't force those on you</strong>. It should  <em>suggest</em> them, and you can accept or ignore. The system <strong>learns from how you work</strong>,  <strong>not the other way around</strong>.
            </p>

            <p>
              I've been thinking about different modes of interaction. Sometimes you want to draw 
              <em>freehand</em>. Sometimes you want to <em>snap to grids</em> or align with existing geometry. 
              Sometimes you want to <em>describe what you want verbally</em> while sketching. The system 
              should support all of these, and let you switch between them <strong>fluidly</strong>. <strong>Not separate 
              modes you toggle</strong>, but <strong>natural transitions</strong> based on what you're doing.
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

            <p>
              There's also a <em>lighter</em> use case I've been thinking about: it could work as a basic 
              sketch tool for brainstorming sessions, solo or team. <strong>Like pictionary, but for 
              engineering</strong>. You draw something, the system <strong>builds off what you're drawing</strong> in real-time, 
              suggesting connections, showing 3D views, running quick checks. It's <em>playful</em> but  <strong>useful</strong>—you're exploring ideas, and the system is helping you see what they might 
              become. <strong>Not everything needs to be a formal design process</strong>. Sometimes you just need 
              to <em>think out loud</em>, and the system should support that too.
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

